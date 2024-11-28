const recommendationForm = document.getElementById('recommendationform');

recommendationForm.addEventListener("submit", (e)=>{
    e.preventDefault()


    const region=document.getElementById('region').value;

    if(region === 'LAIKIPIA COUNTY(Laikipia North)'){
        message ="Laikipia North's climate is arid to semi-arid with low rainfall and sandy soils. Suitable crops for this are sorghum, millet, pigeon peas, beans, and horticultural crops such as onions and tomatoes with irrigation."
    }
    if(region === 'LAIKIPIA COUNTY(Laikipia Central)'){
        message = "Laikipia Central is a semi-arid area with moderate rainfall and sandy and loamy soils. The best crops to grow in this area are beans, maize, sorghum, millet, Napier grass, Rhodes grass, and horticultural crops such as cabbages, onions, and tomatoes with irrigation."
    }
    if(region === 'LAIKIPIA COUNTY(Laikipia East)'){
        message = "Laikipia East is a semi-arid to arid area with sandy and loamy soils. Crops that do well in this area include maize adapted to semi-arid conditions, beans, sorghum, millet, Napier grass, Rhodes grass, and horticultural crops such as onions, cabbages, and tomatoes with irrigation."
    }
    if(region === 'LAIKIPIA COUNTY(Laikipia West)'){
        message="Laikipia West is has higher rainfall than other parts of Laikipia County. It has fertile volcanic soils, and suitable crops for this area include maize, potatoes, carrots, cabbages, kale, beans, and fodder crops like Napier, which support dairy farming in the area."
    }
    if(region === 'NYERI COUNTY(Kieni East)'){
        message = "Kieni East is a Semi-arid area on the Lee Ward side of Mount Kenya. It also has sandy and loamy soils. Crops that grow well in this area include maize, beans, and Irish potatoes. Carrots, cabbages, onions and spinach do well but under irrigated agriculture."
    }
    if(region === 'NYERI COUNTY(Kieni West)'){
        message="Kieni West is a semi-arid area with sandy and loamy soils. Crops that grow well in this area include maize, beans, and Irish potatoes. Carrots, cabbages, onions, and spinach do well but under irrigated agriculture."
    }
    if(region === 'NYERI COUNTY(Mathira East)'){
        message = "Mathira East is an area that’s humid with ample rainfall and fertile volcanic soils. Suitable crops for this area include: coffee, especially Arabica, tea, cabbages, spinach, kales, bananas, and Napier grass."
    }
    if(region === 'NYERI COUNTY(Mathira West)'){
        message="Mathira West is an area that’s humid with ample rainfall and fertile volcanic soils. Suitable crops for this area include: coffee, especially Arabica, tea, cabbages, spinach, kales, bananas, and Napier grass."
    }
    if(region==='NYERI COUNTY(Nyeri Central)'){
        message ="Nyeri Central has a moderate climate with reliable rainfall. It also has well-drained volcanic soils. Crops that do well in this area include Avocados, passion fruits, tomatoes, onions, maize, tea, coffee, and capsicum."
    }
    if(region ==='NYERI COUNTY(Mukurweini)'){
        message="Mukurweini has a moderate climate with reliable rainfall. It also has well-drained volcanic soils. Crops that do well in this area include cabbages, kale, coffee, tea, banana, tea, and maize."
    }
    if(region === 'NYERI COUNTY(Tetu)'){
        message="Tetu has a cool and wet climate with reliable rainfall and fertile volcanic soils. Suitable crops for this area include avocados, passion fruits, coffee, tea, cabbages, kale, spinach, and Napier grass, which supports dairy farming."
    }
    if(region ==='NYERI COUNTY(Othaya)'){
        message ="Othaya has a cool and wet climate with reliable rainfall and fertile volcanic soils. Suitable crops for this area include coffee, tea, cabbages, kale, bananas, and Napier grass, which supports dairy farming."
    }


    document.getElementById('recommendation').innerHTML = message;
})