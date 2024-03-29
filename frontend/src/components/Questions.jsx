import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    
    rows: [
        {
            title: "What do I need to rent a vehicle?",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
        },
        {
            title: "Where can I pick up the vehicle?",
            content:
                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
            title: "How many days can I rent a vehicle for?",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        },
        {
            title: "How can I rent out my own vehicle?",
            content: <p>current version is 1.2.1</p>,
        },
        {
            title: "What vehicles are offered on the site?",
            content: <p>current version is 1.2.1</p>,
        }
    ],
};

const styles = {
    bgColor: 'black',
    titleTextColor: "white",
    rowTitleColor: "white",
    rowContentColor: 'grey',
    arrowColor: "white",
    rowTitleTextSize: '18px',
    rowContentPaddingBottom: '20px',
    rowContentPaddingTop: '10px',
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    tabFocus: true
};

function Questions() {
  return (
    <div class="font-latoFont mx-56 pt-8">
        <p class=" text-white text-5xl font-bold text-center pb-12"> 
            Frequently Asked  
            <span class="text-main-blue"> Questions </span>
        </p>
        <div class="w-4/6 justify-between m-auto pb-20">
            <Faq 
                data={data}
                styles={styles}
                config={config}
            />
        </div>
        <p class=" text-white text-center text-xs pb-4"> Copyright © 2023 Voyager All Rights Reserved</p>
        
    </div>
  )
}

export default Questions