var j = 499
for (var i = 0; i < 400; i++)
	{
		
		app.activeDocument.saveAs(new File("C:/Users/looke/Desktop/test/Comanda10x15-Nebrasca "+j+".png"), new PNGSaveOptions(),true,Extension.LOWERCASE)
		j--
		app.activeDocument.layers[i].visible = false
	}
	

//app.activeDocument.layers[0].name = "agfasgasaf"

//app.activeDocument.layers[0].visible = false