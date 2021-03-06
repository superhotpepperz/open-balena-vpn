/*
	Copyright (C) 2018 Balena Ltd.

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU Affero General Public License as published
	by the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU Affero General Public License for more details.

	You should have received a copy of the GNU Affero General Public License
	along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

declare module 'openvpn-client' {
	export type VpnOpts = string[];

	export class OpenVPNClient {
		constructor(vpnOpts?: VpnOpts);

		public authenticate(user: string, pass: string): void;
		public connect(callback: () => void): Bluebird<any>;
		public disconnect(): Bluebird<void>;

		public on(event: 'data', callback: (data: Buffer) => void): this;
		public on(event: 'connect', callback: () => void): this;
		public on(event: 'disconnect', callback: (code: number) => void): this;
	}

	export const create: (vpnOpts?: VpnOpts) => OpenVPNClient;
	export const connect: (
		auth?: { user: string; pass: string },
		vpnOpts?: VpnOpts,
	) => OpenVPNClient;
}
