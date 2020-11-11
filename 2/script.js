
// 1. Varför loggas ingenting ut när man kör det här skriptet? 
// Det finns två fel. SVAR: Finns inga citat tecken och det stog hello. 

// 2. Ändra scriptet så att "Hello, how are you today?" verkligen loggas ut.

function hello() {
    console.log("how are you today?")
    console.log("how are you today?")
}

hello()
hello ()
hello ()

// 3. Uppdatera funktionen hello så att den tar ett namn som argument

function hello(name = "Tanja") {
    console.log("hello "  + name + " how are you today")
}
hello()

// Gör så att den hälsar med namn, t.ex. "Hello Fredrik, how are you today?"
