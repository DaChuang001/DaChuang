class endScene extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
        this.skinName="resource/eui_skins/scene/endScene.exml"
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
}
export{endScene}