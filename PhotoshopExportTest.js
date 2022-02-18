var stories = false

//NUMBER OF IMAGES
var count = 29

//PATH
var filePath = "F:/APR_Artes/Otica Conceito/2021/Dezembro/Arte "

for (var i = 0; i < (count + 1); i++)
	{	
			
		if (i != 0){
			options = new PNGSaveOptions();
			options.compression = 9;
			
			if (stories == true){
				app.activeDocument.exportDocument(new File(filePath + i + " Stories.png"), ExportType.SAVEFORWEB)	
				
			}
			else{
				app.activeDocument.exportDocument(new File(filePath + i + ".png"), ExportType.SAVEFORWEB)	
			}
			
			
			
			app.activeDocument.layers[i].visible = false
		}
		
	}
	
	
