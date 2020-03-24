declare namespace GlobalMixins
{
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface IResourceMetadata extends Partial<import('@pixi/spritesheet').ISpritesheetMetadata>{}

    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface ILoaderResource extends Partial<import('@pixi/spritesheet').ISpritesheetResource> {}
}
