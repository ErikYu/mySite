function ock1(){
	var lambda0=parseFloat(document.getElementById("lambda0").value);
	var a=parseFloat(document.getElementById("A").value);
	var b=parseFloat(document.getElementById("B").value);
	var tempFluid=parseFloat(document.getElementById("tempFluid").value);
	var tempSrrd=parseFloat(document.getElementById("tempSrrd").value);
	var vWind=parseFloat(document.getElementById("vWind").value);
	var pipeOd=parseFloat(document.getElementById("pipeOd").value);
	var dIso=parseFloat(document.getElementById("dIso").value);
	
	//实际导热系数计算
	var lambda=document.getElementById("lambda");
	var lambda2=lambda0+a*((tempFluid-tempSrrd)/2-b);
	lambda.value=lambda2;
	//外对流换热系数
	var hout=document.getElementById("hout");
	var houtValue=1.163*(10+6*Math.sqrt(vWind));
	hout.value=houtValue;
	//单位长度散热损失
	var qLength=document.getElementById("qLength");
	var qLengthValue=(tempFluid-tempSrrd)/(1/(houtValue*Math.PI*(pipeOd+2*dIso))+Math.log((pipeOd+2*dIso)/pipeOd)/(2*Math.PI*lambda2));
	qLength.value=qLengthValue;
	//单位面积散热损失
	var qAera=document.getElementById("qAera");
	var qAeraValue=qLengthValue/(Math.PI*(pipeOd+2*dIso)/1000);
	qAera.value=qAeraValue;
	//绝热层外表面温度
	var tempIso=document.getElementById("tempIso");
	var tempIsoValue=tempSrrd+qLengthValue/(houtValue*Math.PI*pipeOd/1000);
	tempIso.value=tempIsoValue;
}

$(document).ready(function(){
	$("#calc").hover(function(){
		$(".hoverShowCalc").fadeToggle()
		$("#calcFont").css(
			"filter", "blur(2px)"
		)
	})
	$("#calc").mouseleave(function(){
		$("#calcFont").css(
			"filter", "none"
		)
	})
	$("#blog").hover(function(){
		$(".hoverShowBlog").fadeToggle()
		$("#blogFont").css(
			"filter", "blur(2px)"
		)
	})
	$("#blog").mouseleave(function(){
		$("#blogFont").css(
			"filter", "none"
		)
	})
	$("#gallery").hover(function(){
		$(".hoverShowGallery").fadeToggle()
		$("#galleryFont").css(
			"filter", "blur(2px)"
		)
	})
	$("#gallery").mouseleave(function(){
		$("#galleryFont").css(
			"filter", "none"
		)
	})
	$("#iso").mousedown(function(){
		$("#iso").css(
			"font-size","25px"
		)
	})
	$("#iso").mouseup(function(){
		$("#iso").css(
			"font-size","30px"
		)
	})
})