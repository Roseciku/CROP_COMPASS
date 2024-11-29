const recommendationForm = document.getElementById('recommendationform');

recommendationForm.addEventListener("submit", (e)=>{
    e.preventDefault()


    const region=document.getElementById('region').value;

    if(region === 'LAIKIPIA COUNTY(Laikipia North)'){
        message ="Laikipia North's climate is arid to semi-arid with low rainfall and sandy soils. Suitable crops for this are <strong>sorghum, millet, pigeon peas, beans, and horticultural crops such as onions and tomatoes with irrigation.</strong>"
    }
    if(region === 'LAIKIPIA COUNTY(Laikipia Central)'){
        message = "Laikipia Central is a semi-arid area with moderate rainfall and sandy and loamy soils. The best crops to grow in this area are <strong>beans, maize, sorghum, millet, Napier grass, Rhodes grass, and horticultural crops such as cabbages, onions, and tomatoes with irrigation.</strong>"
    }
    if(region === 'LAIKIPIA COUNTY(Laikipia East)'){
        message = "Laikipia East is a semi-arid to arid area with sandy and loamy soils. Crops that do well in this area include <strong>maize adapted to semi-arid conditions, beans, sorghum, millet, Napier grass, Rhodes grass, and horticultural crops such as onions, cabbages, and tomatoes with irrigation.</strong>"
    }
    if(region === 'LAIKIPIA COUNTY(Laikipia West)'){
        message="Laikipia West is has higher rainfall than other parts of Laikipia County. It has fertile volcanic soils, and suitable crops for this area include <strong> maize, potatoes, carrots, cabbages, kale, beans, and fodder crops like Napier, which support dairy farming in the area.</strong>"
    }
    if(region === 'NYERI COUNTY(Kieni East)'){
        message = "Kieni East is a Semi-arid area on the Lee Ward side of Mount Kenya. It also has sandy and loamy soils. Crops that grow well in this area include <strong>maize, beans, and Irish potatoes. Carrots, cabbages, onions and spinach do well but under irrigated agriculture.</strong>"
    }
    if(region === 'NYERI COUNTY(Kieni West)'){
        message="Kieni West is a semi-arid area with sandy and loamy soils. Crops that grow well in this area include <strong>maize, beans, and Irish potatoes. Carrots, cabbages, onions, and spinach do well but under irrigated agriculture.</strong>"
    }
    if(region === 'NYERI COUNTY(Mathira East)'){
        message = "Mathira East is an area that’s humid with ample rainfall and fertile volcanic soils. Suitable crops for this area include <strong> coffee, especially Arabica, tea, cabbages, spinach, kales, bananas, and Napier grass.</strong>"
    }
    if(region === 'NYERI COUNTY(Mathira West)'){
        message="Mathira West is an area that’s humid with ample rainfall and fertile volcanic soils. Suitable crops for this area include <strong> coffee, especially Arabica, tea, cabbages, spinach, kales, bananas, and Napier grass.</strong>"
    }
    if(region==='NYERI COUNTY(Nyeri Central)'){
        message ="Nyeri Central has a moderate climate with reliable rainfall. It also has well-drained volcanic soils. Crops that do well in this area include <strong>Avocados, passion fruits, tomatoes, onions, maize, tea, coffee, and capsicum.</strong>"
    }
    if(region ==='NYERI COUNTY(Mukurweini)'){
        message="Mukurweini has a moderate climate with reliable rainfall. It also has well-drained volcanic soils. Crops that do well in this area include <strong>cabbages, kale, coffee, tea, banana, tea, and maize. </strong>"
    }
    if(region === 'NYERI COUNTY(Tetu)'){
        message="Tetu has a cool and wet climate with reliable rainfall and fertile volcanic soils. Suitable crops for this area include <strong>avocados, passion fruits, coffee, tea, cabbages, kale, spinach, and Napier grass, which supports dairy farming.</strong>"
    }
    if(region ==='NYERI COUNTY(Othaya)'){
        message ="Othaya has a cool and wet climate with reliable rainfall and fertile volcanic soils. Suitable crops for this area include <strong> coffee, tea, cabbages, kale, bananas, and Napier grass, which supports dairy farming.</strong>"
    }
if(region === 'KAKAMEGA COUNTY(Lugari)'){
    message ="Lugali has moderate rainfall with humid conditions and fertile loamy soils. Suitable crops to grow in this area are <strong> maize, beans, sugarcane, sweet potatoes, finger millet, and groundnuts.</strong>"
}
    if(region==='KAKAMEGA COUNTY(Likuyani)'){
        message="Likuyani has moderate rainfall with humid conditions and fertile loamy soils. Suitable crops to grow in this area are <strong> maize, beans, sugarcane, sweet potatoes, finger millet, and groundnuts.</strong>"
    }
    if(region==='KAKAMEGA COUNTY(Navakholo)'){
        message="Navakholo has high humidity with reliable rainfall and sandy-loam soils with areas suitable for wetlands crops like <strong> rice</strong>. Other suitable crops include <strong> cassava, bananas, maize, leafy vegetables such as spinach, and kale and tomatoes with proper irrigation.</strong>"
    }
    if(region==='KAKAMEGA COUNTY(Mumias East)'){
        message="Mumias East has a humid tropical climate with high rainfall and fertile volcanic soils. Suitable crops for this area include <strong> sugarcane, maize, beans, leafy vegetables, bananas and tomatoes with proper management and irrigation.</strong>"
    }
    if(region === 'KAKAMEGA COUNTY(Mumias West)'){
        message="Mumias West has a humid tropical climate with high rainfall and fertile volcanic soils. Suitable crops for this area include <strong> sugarcane, maize, beans, leafy vegetables, bananas and tomatoes with proper management and irrigation.</strong>"
    }
    if(region==='KAKAMEGA COUNTY(Butere)'){
        message= "Butere is humid with moderate to high rainfall with loamy soils. Suitable crops for this area include <strong> cassava, leafy vegetables, groundnuts, sorghum and maize.</strong>"
    }

    if(region ==='KAKAMEGA COUNTY(Khwisero)'){
    message="Khwisero is humid with moderate to high rainfall with loamy soils and has wetlands ideal for <strong> rice</strong>. Other suitable crops include <strong> cassava, leafy vegetables, groundnuts, sorghum, and maize.</strong>"
    }

    if(region==='KAKAMEGA COUNTY(Shinyalu)'){
    message="Shinyalu is humid with high rainfall in high-altitude areas and fertile volcanic soils. Suitable crops for this area include <strong> bananas, coffee, Irish potatoes, finger millet, and tea for the high altitude areas.</strong>"
    }
    if(region==='KAKAMEGA COUNTY(Ikolomani)'){
    message="Ikolomani is humid with high rainfall in high-altitude areas and fertile volcanic soils. Suitable crops for this area include <strong> bananas, coffee, Irish potatoes, finger millet, and tea for the high altitude areas.</strong>"
    }

    if(region==='KAKAMEGA COUNTY(Malava)'){
    message="Malava: Malava is humid with moderate to high rainfall with fertile loamy soils. Suitable crops for this area include <strong> tomatoes with proper management, sorghum, tea in high altitude areas in Malava, leafy vegetables, bananas, sweet potatoes, and maize.</strong>"
    }
    if(region==='KAKAMEGA COUNTY(Lurambi)'){
        message=": Lurambi is humid with moderate to high rainfall with fertile loamy soils. Suitable crops for this area include <strong> tomatoes with proper management, sorghum, leafy vegetables, bananas, sweet potatoes, and maize.</strong>"
    }
    document.getElementById('recommendation').innerHTML = message;
     document.getElementById('recommendation_div').style.display = 'block';

    });

document.getElementById('closebtn').addEventListener('click', (e)=>{
    document.getElementById('recommendation_div').style.display = 'none'; 
    recommendationForm.reset();
    
})