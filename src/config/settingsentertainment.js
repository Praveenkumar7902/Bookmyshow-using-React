

const settingsentertainment = {
    Infinite:true,
    autoplay:false,
    slidesToShow: 5,
    slidesToScroll: 0,
    InitialSlida:0,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
           
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

    
}
export default settingsentertainment;