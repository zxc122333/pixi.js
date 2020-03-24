import { Resource } from 'resource-loader';

import type { Texture } from '@pixi/core';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IResourceMetadata extends Resource.IMetadata, GlobalMixins.IResourceMetadata {}

export interface ILoaderResource extends Resource, GlobalMixins.ILoaderResource
{
    texture?: Texture;

    // required specific type for Spritesheet
    metadata: IResourceMetadata;
}

// Mix constructor and typeof Resource , otherwise we can't access to statics field
type TLoaderResource = { new(...args: any[]): ILoaderResource } & typeof Resource;

/**
* Reference to **{@link https://github.com/englercj/resource-loader
* resource-loader}**'s Resource class.
* @see http://englercj.github.io/resource-loader/Resource.html
* @class LoaderResource
* @memberof PIXI
*/
export const LoaderResource: TLoaderResource = Resource;
