class MyButton extends eui.Component implements  eui.UIComponent {
	private buttonText:eui.Label;
	public constructor(text:string) {
		super();
		this.skinName="resource/eui_skins/component/MyButton.exml"
		this.buttonText.text=text;
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

export{MyButton}