$("document").ready(function () {
    var score = 0;
    var userScore = 0;
    //math questions, 1stgrade-5thgrade////////////////////////////////////////////////////////////////////////////////////////////////////////
    var firstM = [
        ["How many face cards are in a regular deck of playing cards?", "12", "14", "16", "15"],
        ["The first day of the 20th century was…", "1 January 1901", "10 January 1901", "1 January 1910", "11 January 1910"],
        ["How many states made up the United States before Alaska and Hawaii joined?", "48", "42", "46", "32"],
        ["The largest number that can be pronounced with a single syllable is…", "12", "5", "2", "10"],
        ["You peer through a window into a classroom and count 20 eyes. If each person has a normal number of eyes, how many people are in the room?", "10", "20", "15", "5"]
    ];
    var secondM = [
        ["What is the area of a triangle with a height of 4 and a width of 4?", "8", "16", "12", "20"],
        ["Solve the following equation: 3 + 2 / 1 =", "5", "6", "7", "4"],
        ["On a class field trip, there are 4 buses taking 36 students to the zoo. Each bus has the same number of student. How many students are on each bus?", "9 students on each bus", "18 students on each bus", "12 students on each bus", "4 students on each bus"],
        ["2 dozen kittens and 3 dozen puppies get adopted from the shelter. How many animals were adopted?", "60", "45", "75", "30"],
        ["What number is the Roman numeral XVI?", "16", "14", "26", "24"]
    ];
    var thirdM = [
        ["When writing out a fraction, the numbers above and below the vinculum are called the…", "Numerator/denominator", "Denominator/numerator", "Divider/additive", "Additive/divider"],
        ["To the nearest multiple of 10, how many kilograms of cheese are in 110 pounds of cheese…", "50", "40", "60", "30"],
        ["If a shopping cart contains 1 apple, 2 bananas, 3 oranges, 4 hot dogs, what percent of the cart’s total contents is fruit?", "60%", "50%", "70%", "40%"],
        ["If the first person takes 25% of the cake and the second person takes 20% of the remainder, how much of the original cake remains?", "60%", "50%", "70%", "80%"],
        ["How many grams are in a thousand kilograms?", "One million", "Ten million", "One hundred million", "One hundred thousand"]
    ];
    var fourthM = [

    ];
    //science questions, 1stgrade-5thgrade/////////////////////////////////////////////////////////////////////////////////////////////////////
    var firstS = [
        ["What causes tides?", "The sun", "The moon", "The earth's tilt", "The earth's polarity"],
        ["The south pole of the magnet and the north pole of another magnet will do what?", "Push apart", "Stick together", "Conduct electicity", "Switch"],
        ["What is the force that causes objects to fall to the ground?", "Convection", "Gravity", "Conduction", "Magnetism"],
        ["A caterpillar changes and grows into a what?", "Junebug", "Butterfly", "Dragonfly", "Stinkbug"],
        ["What is the biggest organ in the human body?", "Skin", "Liver", "Large intestine", "Lungs"]
    ];
    var secondS = [
        ["What is H2O also known as?", "Water", "Hydroxite", "Helium oxide", "Hydrogen"],
        ["What gas is in the air we breathe?", "Oxygen", "Carbon", "Hydrogen", "Nitrogen"],
        ["What gas do plants breathe in that humans and animals breathe out?", "Carbon dioxide", "Oxygen", "Carbon monoxide", "Tetra-hydro carbon"],
        ["Earth is located in what galaxy?", "The Milky Way Galaxy", "The Andromeda Galaxy", "The Spiral Galaxy", "The Wasp Galaxy"],
        ["Which set of these are mammels?", "Lions, tigers, bears", "Whales, ducks, kangaroos", "Quails, lions, bears", "Dolphins, octopi, sea lions"]
    ];
    var thirdS = [
        ["What phenomenon might be felt on the surface when two tectonic plates rub against each other?", "Volcano", "Earthquake", "Sinkhole", "Convergence"],
        ["The hardest naturally occurring mineral is…", "Steel", "Diamond", "Titanium", "Unobtainium"],
        ["What is the closest planet to the sun?", "Venus", "Mercury", "Earth", "Mars"],
        ["The process by which plants eat and make energy is called…", "Endomitacin", "Photosynthesis", "Antiseptic", "Staticity"],
        ["Does the sun orbit the Earth?", "Yes", "No", "Neither", "Both"]
    ];
    var fourthS = [
        ["What is the part of the eye that controls how much light enters?", "Iris", "Cornea", "Sclera", "Pupil"],
        ["What planet is nicknamed the 'Red Planet?'", "Mercury", "Earth", "Venus", "Mars"],
        ["Animals that eat only meat are known as…", "Omnivores", "Herbivores", "Vegans", "Carnivores"],
        ["How long does Earth take to revolve once around the sun?", "360", "355", "370", "365"],
        ["What is the freezing point of water in Fahrenheit?", "30°F", "28°F", "34°F", "32°F"]
    ];
    var fifthS = [
        ["The Earth is at least how many billion years old?", "6 billion", "13 billion", "4 billion", "10 billion"],
        ["What are the three states of matter?", "Gas, liquid, and antimatter", "Water, air, and mass", "Solid, liquid, and gas", "Protons, Neutrons, and electrons"],
        ["The Earth has 4 layers, the thickest of which is the mantle. What is the thinnest layer called?", "The Mantle", "The Inner Core", "The Crust", "The Outer Core"],
        ["Animals without backbones are known as...", "Vertabrates", "Cephalapods", "Invertebrates", "Mammelia"],
        ["What species can live on both water and land?", "Crustaceans", "Mammels", "Amphibians", "Cephalapods"]
    ];
    //geography questions, 1stgrade-5thgrade/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var firstG = [
        ["How many continents are there?", "6", "9", "11", "7"],
        ["What country is Paris the capital of?", "Champagne", "Lyon", "Cannes", "France"],
        ["In which country are the famous Pyramids of Giza?", "Cairo", "Budapest", "Cairo", "Egypt"],
        ["In what city is the White House located?", "Boston", "Albany", "Tulsa", "Washington D.C."],
        ["How many states are in the United States of America?", "51", "48", "52", "50"]
    ];
    var secondG = [
        ["Which state is called the Lone Star state?", "Texas", "North Carolina", "Washington", "Arkansas"],
        ["In what state is the Grand Canyon located?", "Arizona", "New Mexico", "Nevada", "Utah"],
        ["What three countries are located in North America?", "Canada, the United States, and Mexico", "Alaska, Hawaii, and Bahamas", "New England, Baja, and Gulf", "Russia, China, and Egypt"],
        ["To travel from New York to London, one must fly over which ocean?", "The Atlantic Ocean", "The Pacific Ocean", "The Indian Ocean", "The Artic Ocean"],
        ["In what country is the famous Taj Mahal located?", "India", "Nepal", "China", "Mongolia"]
    ];
    var thirdG = [
        ["What is the longest river in the world?", "The Amazon", "The Nile", "The Ohio", "Niagra"],
        ["On what continent is the country of Greece located?", "Europe", "Africa", "Asia", "South America"],
        ["What is the name for a body of land that is completely surrounded by water?", "An island", "A peninsula", "A continent", "A plateau"],
        ["What is the capital of New York?", "Albany", "Newark", "Manhattan", "Calgary"],
        ["What is New York's nickname?", "The Empire State", "The Granite State", "The Apple State", "The Steel State"]
    ];
    var fourthG = [
        ["Where is the largest desert in the world located?", "Northern Africa", "Northern Asia", "Southern Asia", "Austrailia"],
        ["How many kingdoms are part of the United Kingdom?", "4", "5", "3", "6"],
        ["Which country is the largest in size?", "Russia", "China", "Brazil", "Austrailia"],
        ["The United States and Mexico are separated by which river?", "The Rio Grande", "The Colorado River", "The Grijalva River", "The Chixoy River"],
        ["What is the southernmost continent called?", "Antarctica", "Austrailia", "South America", "Africa"]
    ];
    var fifthG = [
        ["What is the main language spoken in the Canadian province of Quebec?", "French", "Spanish", "Dutch", "English"],
        ["Which country is both an island and a continent?", "Australia", "New Zealand", "Africa", "Madagascar"],
        ["What is the name of the sea bordered by Europe to the north and North Africa to the south?", "The Mediterranean Sea", "The Red Sea", "The Baltic Sea", "The Caspian Sea"],
        ["The mountain range that includes Mount Everest is called...", "The Himalayas", "The Andes", "The Rockys", "The Appalachians"],
        ["Imaginary lines traversing the globe from pole to pole are called…", "Meridians", "International Date Line", "Equator", "Tropic of Cancer"]
    ];
    //Eng & Lit Questions, 1stgrade-5thgrade/////////////////////////////////////////////////////////////////////////////////////////////////////////        
    var firstE = [
        ["The plural of “moose” is…", "Meese", "A Mock", "Moose", "Mooses"],
        ["How many letters are in the English alphabet?", "24", "22", "26", "28"],
        ["In the story about the boy who cried wolf, what is the lesson?", "It's better to love than loss", "What goes around, comes around", "Always tell the truth", "Don't pet the sweaty things and don't sweat the pety things"],
        ["What is the term for a word that is similar in meaning to another word?", "Antonym", "Palindrome", "Synonym", "Homonym"],
        ["What type of words should be capitalized?", "Adjectives", "Proverbs", "Proper nouns", "Variables"]
    ];
    var secondE = [
        ["What type of literature features magical creatures, such as giants, gnomes, and goblins?", "Folk Lores", "Myths", "Legends", "Fairy Tales"],
        ["Is “red” an adjective or a noun?", "Both", "Adjective", "Noun", "Neither"],
        ["What is the term for a word that has the opposite meaning of another word?", "Synonym", "Palindrome", "Pangram", "Antonym"],
        ["What are the five interrogative or 'question' words?", "Because, else, if, so, like", "Am, your, his, hers, those", "Look, hear, smell, taste, feel", "What, why, who, where, when"],
        ["What are the comparative and superlative forms of the word 'big'?", "Large and huge", "Small and tiny", "More and too", "Bigger and biggest"]
    ];
    var thirdE = [
        ["The person in a novel who tells the story from a third-person perspective is called a what?", "A third wall", "A narrator", "The antagonist", "The protagonist"],
        ["What is the name of the book about a friendship between a pig named Wilbur and spider named Charlotte?", "Babe", "Charlotte’s Web", "The sandlot", "Free Willy"],
        ["Adding conjunctions such as “and” or “but” turns a simple sentence into what type of sentence?", "Inline sentence", "Compound sentence", "A panogram", "None of them"],
        ["Who is the author of James and the Giant Peach?", "Eric Carle", "Roald Dahl", "Judy Blume", "E. B. White"],
        ["The main series of events in a story is called a what?", "An End", "A plot", "Conflict", "Structure"]
    ];
    var fourthE = [
        ["What is the main character in a story called?", "A protagonist", " An antagonist", "A narrator", "A comic-relief"],
        ["What type of word is 'truthfully?'", "Adverb", "Noun", "Proverb", "Adjective"],
        ["In this book titled The Lion, the Witch, and the Wardrobe, what is the last comma called?", "The Oxford comma", "The Brown note", "The Stanford character", "TOC"],
        ["A story conveying a moral lesson is called what?", "A fable", "A myth", "A legend", "a note"],
        ["What do you call a group of crows?", "A murder", "A flock", "A herd", "A trove"]
    ]; var fifthE = [
        ["Who is the creator of the classic book characters Tom Sawyer and Huckleberry Finn?", "Clara Clemens", "Mark Twain", "John Marshall", "Charles Dickens"],
        ["The words “the,” “an,” and “a,” are known as what in English grammar?", "Fillers", "Articles", "Arbitraries", "Pointers"],
        ["Who is the author of the 1960 novel about social and racial inequality To Kill a Mockingbird?", "Lee Harper", "Harper Lee", "Marcus Anthony", "John J. Reynolds"],
        ["Often seen at the end of a sentence, the three trailing dots that indicate the omission from speech or writing of a word or words that are superfluous or able to be understood from contextual clues are known as…", "Contrasts", "Ellipsis", "Pointers", "Wheels"],
        ["What is the name of the most famous English playwright?", "Homer", "William Shakespeare", "Charles Dickens", "Jane Austen"]
    ];
    //History Question, 1stgrade-5thgrade///////////////////////////////////////////////////////////////////////////////////////////////////////// 
    var firstH = [
        ["The first Thanksgiving was celebrated by Native Americans and what other group of people?", "The Pilgrims", "The Cherokee", "The Puritans", "The Spaniards"],
        ["From which country did Mexico gain its independence in the 19th century?", "Spain", "England", "Portugal", "Honduras"],
        ["Who invented the light bulb in 1879?", "Thomas Edison", "Alexander Graham Bell", "George Westinghouse", "J. P. Morgan"],
        ["Which language is the most widely spoken in South America?", "Spanish", "English", "Portuguese", "French"],
        ["Neil Armstrong and Buzz Aldrin were the first two men in the entire world to do what?", "Walk on the moon", "Play golf on the moon", "Land on the darkside of the moon", "Drive on the moon"]
    ];
    var secondH = [
        ["What are the three branches of the United States government?", "Congress, Supreme Court, Senate", "House of Rep., Congress, Legislative", "Legislative, Judicial, Executive", "Executive, Legislative, Congress"],
        ["Which war was fought between the north and south regions in the United States?", "The Revolutionary War", "The French and Indian War", "The Civil War", "The Mexican-American War"],
        ["Italy, Japan, and Germany’s alliance was called what during WWII?", "The Wolf's Lair", "The Third Reich", "The Axis of Evil", "Alliance of Reich"],
        ["What city was the first to be attacked by an atomic bomb?", "Nagasaki", "Kyoto", "Hiroshima", "Osaka"],
        ["What are the first ten amendments to the Constitution called?", "Civil Rights", "The Declaration", "The Bill of Rights", "Jackson's Treaties"]
    ];
    var thirdH = [
        ["What type of feather, beginning with letter Q, did people write with during the Middle Ages?", "Qwill", "Quill", "Quince", "Quint"],
        ["Julius Caesar was the emperor of what empire?", "The Greco-Roman Empire", "The Roman Empire", "The Anglo-Roman Empire", "The Romanian Empire"],
        ["What is Rosa Parks most famous for?", "Her Protests for Equal Rights", "Refusing to give her seat up in the front of the bus.", "First African American to vote", "First African American in a Desegregated College",],
        ["The first fireworks were invented in the 7th century in what country?", "Japan", "China", "India", "Mongolia"],
        ["Name the American president on the half dollar coin who was assassinated in 1963.", "Lyndon B. Johnson", "John F. Kennedy", "Dwight D. Eisenhower", "Harry S. Truman"]
    ];
    var fourthH = [
        ["What ancient civilization built the Machu Picchu complex in Peru?", "The Incas", "The Mayans", "The Aztecs", "The Andeans"],
        ["The ancient Egyptian writing system was called what?", "Hieroglyphics", "Cyrillic Script", "sanskrit", "Cuneiform"],
        ["From whom did the United State buy territory in the Louisiana Purchase?", "Napoleon/France", "Edouard de Stoeckl/Russia", "Luis de onis y Gonzalez-Vera/Spain", "Antonio López de Santa Anna/Mexico"],
        ["Who wrote the national anthem of the United States of America?", "Francis S. Key", "Nathaniel C. Towle", "Richard E. Berg", "Howard P. Willens"],
        ["The Battle of Gettysburg was fought in which war?", "The Civil War", "The Revolutionary War", "The War on Drugs", "World War 2"]
    ];
    var fifthH = [
        ["The what was the name of the last Queen of France?", "Anne of Brittany", "Adela of Champagne", "Empress Jose`phine", "Queen Marie Antoinette"],
        ["The region known as the “Fertile Crescent” is located in present day…", "Southeast Asia", "Western Europe", "Western Asia", "Middle East"],
        ["The modern day city of Istanbul was known by what name in the 13th century…", "Ephesus", "Ankara", "Izmir", "Constantinople"],
        ["The French and Indian war, which began in 1754, became the North American theater of this worldwide war that lasted from 1756 to 1763…", "American Revolutionary War", "The Battle of Britannia", "The Civil War", "The Seven Years War"],
        ["In which decade did Hong Kong revert from British rule…", "1960s (1968)", "1970s (1979)", "1980s (1986)", "1990s (1997)"]
    ];
    //math questions randomly picked, 1stgrade-5thgrade/////////////////////////////////////////////////////////////
    //                                                                        3rd answer right
    var oneM = firstM[Math.floor(Math.random() * firstM.length)];
    console.log(oneM);
    $("#m100").on("click", function () {
        $("#m100").prop("disabled", true);
        enableAnswers();
        $(".lead").html(oneM[0]);
        $("#ans1").html(oneM[1]).one("click", function () {
            disableAnswers();
        });
        $("#ans2").html(oneM[2]).one("click", function () {
            disableAnswers();
        });
        $("#ans3").html(oneM[3]).one("click", function () {
            userScore += 100;
            $("#score").html(userScore);
            alert("Correct Answer, Please Pick Another Category");
            disableAnswers();
        });
        $("#ans4").html(oneM[4]).one("click", function () {
            disableAnswers();
        });
    })
    //science questions randomly picked, 1stgrade-5thgrade////////////////////////////////////////////////
    //                                                                     2nd answer right
    var oneS = firstS[Math.floor(Math.random() * firstS.length)];
    console.log(oneS);
    $("#s100").on("click", function () {
        $("#s100").prop("disabled", true);
        enableAnswers();
        $(".lead").html(oneS[0]);
        $("#ans1").html(oneS[1]).one("click", function () {
            disableAnswers();
        });
        $("#ans2").html(oneS[2]).one("click", function () {
            userScore += 100;
            $("#score").html(userScore);
            alert("Correct Answer, Please Pick Another Category");
            disableAnswers();
        });
        $("#ans3").html(oneS[3]).one("click", function () {

            disableAnswers();
        });
        $("#ans4").html(oneS[4]).one("click", function () {
            disableAnswers();
        });
    })
    //                                                                               1st answer right
    var twoS = secondS[Math.floor(Math.random() * secondS.length)];
    console.log(twoS);
    $("#s200").on("click", function () {
        $("#s200").prop("disabled", true);
        enableAnswers();
        $(".lead").html(twoS[0]);
        $("#ans1").html(twoS[1]).one("click", function () {
            userScore += 200;
            $("#score").html(userScore);
            alert("Correct Answer, Please Pick Another Category");
            disableAnswers();
        });
        $("#ans2").html(twoS[2]).one("click", function () {
            disableAnswers();
        });
        $("#ans3").html(twoS[3]).one("click", function () {
            disableAnswers();
        });
        $("#ans4").html(twoS[4]).one("click", function () {
            disableAnswers();
        });
    })
    //                                                                   2nd answer right
    var threeS = thirdS[Math.floor(Math.random() * thirdS.length)];
    console.log(threeS);
    $("#s300").on("click", function () {
        $("#s300").prop("disabled", true);
        enableAnswers();
        $(".lead").html(threeS[0]);
        $("#ans1").html(threeS[1]).one("click", function () {
            disableAnswers();
        });
        $("#ans2").html(threeS[2]).one("click", function () {
            userScore += 300;
            $("#score").html(userScore);
            alert("Correct Answer, Please Pick Another Category");
            disableAnswers();
        });
        $("#ans3").html(threeS[3]).one("click", function () {
            disableAnswers();
        });
        $("#ans4").html(threeS[4]).one("click", function () {
            disableAnswers();
        });
    })
    //                                                                        4th answer right
    var fourS = fourthS[Math.floor(Math.random() * fourthS.length)];
    console.log(fourS);
    $("#s400").on("click", function () {
        $("#s400").prop("disabled", true);
        enableAnswers();
        $(".lead").html(fourS[0]);
        $("#ans1").html(fourS[1]).one("click", function () {
            disableAnswers();
        });
        $("#ans2").html(fourS[2]).one("click", function () {
            disableAnswers();
        });
        $("#ans3").html(fourS[3]).one("click", function () {
            disableAnswers();
        });
        $("#ans4").html(fourS[4]).one("click", function () {
            userScore += 400;
            $("#score").html(userScore);
            alert("Correct Answer, Please Pick Another Category");
            disableAnswers();
        });
    })
    //                                                                             3rd answer right
    var fiveS = fifthS[Math.floor(Math.random() * fifthS.length)];
    console.log(fiveS);
    $("#s500").on("click", function () {
        $("#s500").prop("disabled", true);
        enableAnswers();
        $(".lead").html(fiveS[0]);
        $("#ans1").html(fiveS[1]).one("click", function () {
            disableAnswers();
        });
        $("#ans2").html(fiveS[2]).one("click", function () {
            disableAnswers();
        });
        $("#ans3").html(fiveS[3]).one("click", function () {
            userScore += 500;
            $("#score").html(userScore);
            alert("Correct Answer, Please Pick Another Category");
            disableAnswers();
        });
        $("#ans4").html(fiveS[4]).one("click", function () {
            disableAnswers();
        });
    })
    //geography questions randomly picked, 1stgrade-5thgrade/////////////////////////////////////////////////
    //                                                                   4th answer right
    var oneG = firstG[Math.floor(Math.random() * firstG.length)];
    console.log(oneG);
    $("#g100").on("click", function () {
        $("#g100").prop("disabled", true);
        enableAnswers();
        $(".lead").html(oneG[0]);
        $("#ans1").html(oneG[1]).one("click", function () {
            disableAnswers();
        });
        $("#ans2").html(oneG[2]).one("click", function () {
            disableAnswers();
        });
        $("#ans3").html(oneG[3]).one("click", function () {

            disableAnswers();
        });
        $("#ans4").html(oneG[4]).one("click", function () {
            userScore += 100;
            $("#score").html(userScore);
            alert("Correct Answer, Please Pick Another Category");
            disableAnswers();
        });
    })
    //                                                                     1st answer right
    var twoG = secondG[Math.floor(Math.random() * secondG.length)];
    console.log(twoG);
    $("#g200").on("click", function () {
        $("#g200").prop("disabled", true);
        enableAnswers();
        $(".lead").html(twoG[0]);
        $("#ans1").html(twoG[1]).one("click", function () {
            userScore += 200;
            $("#score").html(userScore);
            alert("Correct Answer, Please Pick Another Category");
            disableAnswers();
        });
        $("#ans2").html(twoG[2]).one("click", function () {
            disableAnswers();
        });
        $("#ans3").html(twoG[3]).one("click", function () {

            disableAnswers();
        });
        $("#ans4").html(twoG[4]).one("click", function () {
            disableAnswers();
        });
    })
    //                                                                        3rd answer right
    var threeG = thirdG[Math.floor(Math.random() * thirdG.length)];
    console.log(threeG);
    $("#g300").on("click", function () {
        $("#g300").prop("disabled", true);
        enableAnswers();
        $(".lead").html(threeG[0]);
        $("#ans1").html(threeG[1]).one("click", function () {
            disableAnswers();
        });
        $("#ans2").html(threeG[2]).one("click", function () {
            disableAnswers();
        });
        $("#ans3").html(threeG[3]).one("click", function () {
            userScore += 300;
            $("#score").html(userScore);
            alert("Correct Answer, Please Pick Another Category");
            disableAnswers();
        });
        $("#ans4").html(threeG[4]).one("click", function () {
            disableAnswers();
        });
    })
    //                                                                           2nd answer right
    var fourG = fourthG[Math.floor(Math.random() * fourthG.length)];
    console.log(fourG);
    $("#g400").on("click", function () {
        $("#g400").prop("disabled", true);
        enableAnswers();
        $(".lead").html(fourG[0]);
        $("#ans1").html(fourG[1]).one("click", function () {
            disableAnswers();
        });
        $("#ans2").html(fourG[2]).one("click", function () {
            userScore += 400;
            $("#score").html(userScore);
            alert("Correct Answer, Please Pick Another Category");
            disableAnswers();
        });
        $("#ans3").html(fourG[3]).one("click", function () {
            disableAnswers();
        });
        $("#ans4").html(fourG[4]).one("click", function () {
            disableAnswers();
        });
    })
    //                                                                            2nd answer right
    var fiveG = fifthG[Math.floor(Math.random() * fifthG.length)];
    console.log(fiveG);
    $("#g500").on("click", function () {
        $("#g500").prop("disabled", true);
        enableAnswers();
        $(".lead").html(fiveG[0]);
        $("#ans1").html(fiveG[1]).one("click", function () {
            disableAnswers();
        });
        $("#ans2").html(fiveG[2]).one("click", function () {
            userScore += 500;
            $("#score").html(userScore);
            alert("Correct Answer, Please Pick Another Category");
            disableAnswers();
        });
        $("#ans3").html(fiveG[3]).one("click", function () {
            disableAnswers();
        });
        $("#ans4").html(fiveG[4]).one("click", function () {
            disableAnswers();
        });
    })
    //English & Lit questions randomly picked, 1stgrade-5thgrade///////////////////////////////////////////////////
    //                                                                    3rd answer right
    var oneE = firstE[Math.floor(Math.random() * firstE.length)];
    console.log(oneE);
    $("#e100").on("click", function () {
        $("#e100").prop("disabled", true);
        enableAnswers();
        $(".lead").html(oneE[0]);
        $("#ans1").html(oneE[1]).one("click", function () {
            disableAnswers();
        });
        $("#ans2").html(oneE[2]).one("click", function () {
            disableAnswers();
        });
        $("#ans3").html(oneE[3]).one("click", function () {
            userScore += 100;
            $("#score").html(userScore);
            alert("Correct Answer, Please Pick Another Category");
            disableAnswers();
        });
        $("#ans4").html(oneE[4]).one("click", function () {
            disableAnswers();
        });
    })
    //                                                                    4th answer right
    var twoE = secondE[Math.floor(Math.random() * secondE.length)];
    console.log(twoE);
    $("#e200").on("click", function () {
        $("#e200").prop("disabled", true);
        enableAnswers();
        $(".lead").html(twoE[0]);
        $("#ans1").html(twoE[1]).one("click", function () {
            disableAnswers();
        });
        $("#ans2").html(twoE[2]).one("click", function () {
            disableAnswers();
        });
        $("#ans3").html(twoE[3]).one("click", function () {
            disableAnswers();
        });
        $("#ans4").html(twoE[4]).one("click", function () {
            userScore += 200;
            $("#score").html(userScore);
            alert("Correct Answer, Please Pick Another Category");
            disableAnswers();
        });
    })
    //                                                                      2nd answer right
    var threeE = thirdE[Math.floor(Math.random() * thirdE.length)];
    console.log(threeE);
    $("#e300").on("click", function () {
        $("#e300").prop("disabled", true);
        enableAnswers();
        $(".lead").html(threeE[0]);
        $("#ans1").html(threeE[1]).one("click", function () {
            disableAnswers();
        });
        $("#ans2").html(threeE[2]).one("click", function () {
            userScore += 300;
            $("#score").html(userScore);
            alert("Correct Answer, Please Pick Another Category");
            disableAnswers();
        });
        $("#ans3").html(threeE[3]).one("click", function () {
            disableAnswers();
        });
        $("#ans4").html(threeE[4]).one("click", function () {
            disableAnswers();
        });
    })
    //                                                                           1st answer right
    var fourE = fourthE[Math.floor(Math.random() * fourthE.length)];
    console.log(fourE);
    $("#e400").on("click", function () {
        $("#e400").prop("disabled", true);
        enableAnswers();
        $(".lead").html(fourE[0]);
        $("#ans1").html(fourE[1]).one("click", function () {
            userScore += 400;
            $("#score").html(userScore);
            alert("Correct Answer, Please Pick Another Category");
            disableAnswers();
        });
        $("#ans2").html(fourE[2]).one("click", function () {
            disableAnswers();
        });
        $("#ans3").html(fourE[3]).one("click", function () {
            disableAnswers();
        });
        $("#ans4").html(fourE[4]).one("click", function () {
            disableAnswers();
        });
    })
    //                                                                        2nd answer right
    var fiveE = fifthE[Math.floor(Math.random() * fifthE.length)];
    console.log(fiveE);
    $("#e500").on("click", function () {
        $("#e500").prop("disabled", true);
        enableAnswers();
        $(".lead").html(fiveE[0]);
        $("#ans1").html(fiveE[1]).one("click", function () {
            disableAnswers();
        });
        $("#ans2").html(fiveE[2]).one("click", function () {
            userScore += 500;
            $("#score").html(userScore);
            alert("Correct Answer, Please Pick Another Category");
            disableAnswers();
        });
        $("#ans3").html(fiveE[3]).one("click", function () {
            disableAnswers();
        });
        $("#ans4").html(fiveE[4]).one("click", function () {
            disableAnswers();
        });
    })

    //History questions randomly picked, 1stgrade-5thgrade//////////////////////////////////////////////////////
    //                                                                         1st answer right
    var oneH = firstH[Math.floor(Math.random() * firstH.length)];
    console.log(oneH);
    $("#h100").on("click", function () {
        $("#h100").prop("disabled", true);
        enableAnswers();
        $(".lead").html(oneH[0]);
        $("#ans1").html(oneH[1]).one("click", function () {
            userScore += 100;
            $("#score").html(userScore);
            disableAnswers();
            alert("Correct Answer, Please Pick Another Category");
        });
        $("#ans2").html(oneH[2]).one("click", function () {
            disableAnswers();
        });
        $("#ans3").html(oneH[3]).one("click", function () {
            disableAnswers();
        });
        $("#ans4").html(oneH[4]).one("click", function () {
            disableAnswers();
        });
    })
    //                                                                            3rd answer right
    var twoH = secondH[Math.floor(Math.random() * secondH.length)];
    console.log(twoH);
    $("#h200").on("click", function () {
        $("#h200").prop("disabled", true);
        enableAnswers();
        $(".lead").html(twoH[0]);
        $("#ans1").html(twoH[1]).one("click", function () {
            disableAnswers();
        });
        $("#ans2").html(twoH[2]).one("click", function () {
            disableAnswers();
        });
        $("#ans3").html(twoH[3]).one("click", function () {
            userScore += 200;
            $("#score").html(userScore);
            disableAnswers();
            alert("Correct Answer, Please Pick Another Category");
        });
        $("#ans4").html(twoH[4]).one("click", function () {
            disableAnswers();
        });
    })
    //                                                                           2nd answer right
    var threeH = thirdH[Math.floor(Math.random() * thirdH.length)];
    console.log(threeH);
    $("#h300").on("click", function () {
        $("#h300").prop("disabled", true);
        enableAnswers();
        $(".lead").html(threeH[0]);
        $("#ans1").html(threeH[1]).one("click", function () {
            disableAnswers();
        });
        $("#ans2").html(threeH[2]).one("click", function () {
            userScore += 300;
            $("#score").html(userScore);
            disableAnswers();
            alert("Correct Answer, Please Pick Another Category");
        });
        $("#ans3").html(threeH[3]).one("click", function () {
            disableAnswers();
        });
        $("#ans4").html(threeH[4]).one("click", function () {
            disableAnswers();
        });
    })
    //                                                                      1st answer right
    var fourH = fourthH[Math.floor(Math.random() * fourthH.length)];
    console.log(fourH);
    $("#h400").on("click", function () {
        $("#h400").prop("disabled", true);
        enableAnswers();
        $(".lead").html(fourH[0]);
        $("#ans1").html(fourH[1]).one("click", function () {
            userScore += 400;
            $("#score").html(userScore);
            disableAnswers();
            alert("Correct Answer, Please Pick Another Category");
        });
        $("#ans2").html(fourH[2]).one("click", function () {
            disableAnswers();
        });
        $("#ans3").html(fourH[3]).one("click", function () {
            disableAnswers();
        });
        $("#ans4").html(fourH[4]).one("click", function () {
            disableAnswers();
        });
    })
    //                                                                       4th answer right
    var fiveH = fifthH[Math.floor(Math.random() * fifthH.length)];
    console.log(fiveH);
    $("#h500").on("click", function () {
        $("#h500").prop("disabled", true);
        enableAnswers();
        $(".lead").html(fiveH[0]);
        $("#ans1").html(fiveH[1]).one("click", function () {
            disableAnswers();
        });
        $("#ans2").html(fiveH[2]).one("click", function () {
            disableAnswers();
        });
        $("#ans3").html(fiveH[3]).one("click", function () {
            disableAnswers();
        });
        $("#ans4").html(fiveH[4]).one("click", function () {
            userScore += 500;
            $("#score").html(userScore);
            disableAnswers();
            alert("Correct Answer, Please Pick Another Category");
        })
    })

    function disableAnswers() {
        $("#ans1").prop("disabled", true);
        $("#ans2").prop("disabled", true);
        $("#ans3").prop("disabled", true);
        $("#ans4").prop("disabled", true);
    }

    function enableAnswers() {
        $("#ans1").prop("disabled", false);
        $("#ans2").prop("disabled", false);
        $("#ans3").prop("disabled", false);
        $("#ans4").prop("disabled", false);
    }









    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // document.body.onkeyup = function (e) {
    //     if (e.keyCode == 32) {
    //         reset();
    //     }
    // }
    //<a  href="" target="_blank"></a>
    //links to a new html page for the questions
    // for the other window
    //id="close" onclick="window.close()">
})