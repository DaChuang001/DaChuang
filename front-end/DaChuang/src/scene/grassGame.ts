class grassGame extends eui.Component implements  eui.UIComponent {
	public house65:eui.Image;
	private _bShapeTest:boolean;

	public constructor() {
		super();
		this._bShapeTest = false;

		this.house65=new eui.Image();
		this.house65.anchorOffsetX = this.house65.width / 2;
        this.house65.anchorOffsetY = this.house65.height / 2;
		this.addChild(this.house65);
		this.addEventListener( egret.TouchEvent.TOUCH_BEGIN, this.touchHandler, this );

	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
	private checkCollision( stageX:number, stageY:number ):void {
		alert("check");
        /*** 本示例关键代码段开始 ***/
        var bResult:boolean = this.house65.hitTestPoint( stageX, stageY, this._bShapeTest );
        /*** 本示例关键代码段结束 ***/

        
        /// 文字信息更新
        this.updateInfo( bResult ? 1 :2 );
    }

	private touchHandler( evt:egret.TouchEvent ){
		alert("touch");
		this.checkCollision( evt.stageX, evt.stageY );
        switch ( evt.type ){
            case egret.TouchEvent.TOUCH_MOVE:
				alert("touch case");
                this.checkCollision( evt.stageX, evt.stageY );
                break;
        }
    }

	private updateInfo( iStatus:number ){
        alert(iStatus);
    }
}