import { RedPoint } from "../component/RedPoint";
class BS_gameDetail extends eui.Component implements  eui.UIComponent {
	public r1:eui.Rect;
	public r2:eui.Rect;
	public r3:eui.Rect;
	public r4:eui.Rect;
	public r5:eui.Rect;
	public r6:eui.Rect;
	public r7:eui.Rect;
	public r8:eui.Rect;
	public r9:eui.Rect;
	public r10:eui.Rect;
	public r11:eui.Rect;
	public r12:eui.Rect;
	public r13:eui.Rect;
	public r14:eui.Rect;
	public r15:eui.Rect;
	public r16:eui.Rect;
	public r17:eui.Rect;
	public r18:eui.Rect;
	public r19:eui.Rect;
	public r20:eui.Rect;
	public r21:eui.Rect;
	public r22:eui.Rect;
	public r23:eui.Rect;
	public r24:eui.Rect;
	public r25:eui.Rect;
	public r26:eui.Rect;
	public r27:eui.Rect;
	public r28:eui.Rect;
	public r29:eui.Rect;
	public r30:eui.Rect;
	public r31:eui.Rect;
	

	public constructor() {
		super();
		this.skinName="resource/eui_skins/scene/BS_gameDetail.exml"
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}

	public updateRedPoint(){
		var rp=new RedPoint();
		rp.x=this.r24.x;
		rp.y=this.r24.y;
		this.addChild(rp);
	}
	
}

export{BS_gameDetail}