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
	public rectArr:eui.Rect[];
	private rpArr:RedPoint[];

	public constructor() {
		super();
		this.skinName="resource/eui_skins/scene/BS_gameDetail.exml"
		this.rectArr=new Array();
		this.rpArr=new Array();
		this.rectArr[1]=this.r1;
		this.rectArr[2]=this.r2;
		this.rectArr[3]=this.r3;
		this.rectArr[4]=this.r4;
		this.rectArr[5]=this.r5;
		this.rectArr[6]=this.r6;
		this.rectArr[7]=this.r7;
		this.rectArr[8]=this.r8;
		this.rectArr[9]=this.r9;
		this.rectArr[10]=this.r10;
		this.rectArr[11]=this.r11;
		this.rectArr[12]=this.r12;
		this.rectArr[13]=this.r13;
		this.rectArr[14]=this.r14;
		this.rectArr[15]=this.r15;
		this.rectArr[16]=this.r16;
		this.rectArr[17]=this.r17;
		this.rectArr[18]=this.r18;
		this.rectArr[19]=this.r19;
		this.rectArr[20]=this.r20;
		this.rectArr[21]=this.r21;
		this.rectArr[22]=this.r22;
		this.rectArr[23]=this.r23;
		this.rectArr[24]=this.r24;
		this.rectArr[25]=this.r25;
		this.rectArr[26]=this.r26;
		this.rectArr[27]=this.r27;
		this.rectArr[28]=this.r28;
		this.rectArr[29]=this.r29;
		this.rectArr[30]=this.r30;
		this.rectArr[31]=this.r31;

	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}

	public updateRedPoint(num:number){
		console.log("num:"+num);
		console.log("x:"+this.rectArr[num].x)
		var rp=new RedPoint();
		rp.x=this.rectArr[num].x;
		rp.y=this.rectArr[num].y;
		this.addChild(rp);
		this.rpArr.push(rp);
	}

	public reset(){
		while(true){
			var rp=this.rpArr.pop();
			if(rp){
				this.removeChild(rp);
			}else{
				break;
			}
		}
	}
	
}

export{BS_gameDetail}