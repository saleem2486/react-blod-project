import React, { useState, createContext } from "react";
// import Home from '../../Routes/Home/index'

export const AppData = createContext();
function Store(props) {
  const [data, setdata] = useState([
    
    
    {id:1, 
      ide: 1,
      cat: "Hollywood",
      for: "ArticleList",
      Overview:'Stranger Things is an American science fiction horror drama television series created by the Duffer Brothers, who also serve as showrunners and are executive producers along with Shawn Levy and Dan Cohen. Produced by Monkey Massacre Productions.', 
     
      img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_.jpg", 
      date:' 02/17/2023 ',
      
      title:"Stranger Things ,Drama Series", 
      description: " Overview. Stranger Things is set in the fictional rural town of Hawkins, Indiana, in the 1980s. The nearby Hawkins National Laboratory ostensibly performs scientific research for the United States Department of Energy but secretly experiments with the paranormal and supernatural, sometimes with human test subjects. "
    
  }, 
  {id:2, 
    ide: 2,
      cat: "Hollywood",
      sp: "home-banner",
      for: "ArticleList",
      date:' 03/24/2023',
      title:"Sonar Women",
      img2: "",
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQYJOgUxILXiarEIHUieUh2s-CCEAeS7nx_Pxxl6Xhk2T5dgDvg",
      Overview: 'Sanem is a young woman who aspires to be a writer and live on the Galápagos Islands. Despite working at her father grocery store, she is forced by her parents to choose between an arranged marriage with her neighbor Muzaffer and finding a suitable job',
      description: "Despite working at her father's grocery store, she is forced by her parents to choose between an arranged marriage with her neighbor Muzaffer and finding a suitable job. Sanem lands a job at Fikri Harika, one of Turkey's leading advertising agencies, where Leyla, her sister, is an executive assistant. The owner of the advertising agency, Azizi, has two sons, Emre and Can. Emre wants to take over the company, but his father believes Can is a better fit for the job and he is appointed manager. Can has what his father wants for the company, but he prefers to take photos in remote locations. Upon learning of his father's health problems, Can eventually agrees to run the company..helping their rival, Aylin. Emre doesn't like the idea of his brother being the manager, and believes that he should have the position. Emre's plan is to make him fail, as well as becoming the spy himself. Sanem bumps into Can on a dark balcony at an opera party celebrating the company's 40th anniversary. Can thinks she is his girlfriend Polen, so he kisses her. Sanem realizes that she loves the stranger who kissed her, and gives him the codename Albatross, but hates Can, and Emre makes her believe that Can only wants to increase the value of the company so that it can be sold. Can soon falls in love with Sanem, and finds out that he kissed her that day at the opera, which begins the inevitable story of love"
      
  },  
  {id:3, 
    ide: 3,
      cat: "Hollywood",
      for: "ArticleList",
      date:' 03/03/2023',
      img: 'https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg',
      title:'Lod Of Rings',
      Overview: 'The Lord of the Rings is a series of three epic fantasy adventure films directed by Peter Jackson, based on the novel The Lord of the Rings by J. R. R. Tolkien.',
      description: "The Lord of the Rings is a series of three epic fantasy adventure films directed by Peter Jackson, based on the novel The Lord of the Rings by J. R. R. Tolkien. The films are subtitled The Fellowship of the Ring (2001), The Two Towers (2002), and The Return of the King (2003). Produced and distributed by New Line Cinema with the co-production of WingNut Films, the series is an international venture between New Zealand and the United States. The films feature an ensemble cast including Elijah Wood, Ian McKellen, Liv Tyler, Viggo Mortensen, Sean Astin, Cate Blanchett, John Rhys-Davies, Christopher Lee, Billy Boyd, Dominic Monaghan, Orlando Bloom, Hugo Weaving, Andy Serkis and Sean Bean."

  },
  {id:4, 
    ide: 4,
      cat: "Hollywood",
      for: "ArticleList",
      date:' 05/05/2023',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQaEFnTagipxGek320Ytdkfar67mGKRrTgb4YhvIq1bKxjGDZ5',
      title:'Game of Thrones 5',
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. "
    },
    {id:5,
      ide: 5, 
      cat: "Hollywood",
      for: "ArticleList",
      date:'04/18/2023 ',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEUOnXKnRL0jeo6y4_Nzt0RggJHYbxI_RjJUgCvmdG28BAwpAx',
      title:'Breaking bed',
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. "
  },
  {id:6,
    ide: 6, 
      cat: "Hollywood",
      for: "ArticleList",
      sp: "home-latestBig",
      date:' 12/16/2022',
      img2: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHOvOq-Ogk4oz6d49RxNbnYRSYug2T8gJ-rcTjokrjoLwtFYtR",
      title:'Sporenous',
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. "
  },
  {id:7, 
    ide: 7,
      cat: "Hollywood",
      for: "ArticleList",
      date:' 03/17/2023 ',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpiX6QwgIOQkRv1NBQZL7x9b7t6QZiMiV83v4o-TIxBeA91CB',
      title:'The Walikng Ded',
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
    },
    {id:8,
      ide: 8, 
      cat: "Hollywood",
      for: "TopList",
      date:' 04/21/2023',
      img: 'http://t0.gstatic.com/images?q=tbn:ANd9GcTfMwhN4Uvbna3kiIV19_5IIk3NRp662reh2eSRSTcwJf6ISGMd',
      title:'True Detactive',
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
      
    },
    {id:9, 
      ide: 9,
      cat: "Hollywood",
      for: "TopList",
      date:' 04/21/2023  ',
      img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTG6-lbU-7v8uW5k56PshYE-iFNXmXkM6sTx3h9-EAJdJxKQwxl',
      title:"Six Feet Under",
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
},
    {id:10, 
      ide: 10,
      cat: "Hollywood",
      for: "TheTopList",
      date:'  09/03/2022',
      img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQcEazg1RHMebusfpj_3nR8f-d_CgNLxAc0Wm9foVDza9M4hKcf',
      title:'Money Heist',
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
    },
    {id:11,
      ide: 11, 
      cat: "Hollywood",
      for: "TopList",
      date:' 05/04/2023',
      img: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/vnRthEZz16Q9VWcP5homkHxyHoy.jpg',
      title:'The Mother ',
      Overview: 'A deadly female assassin comes out of hiding to protect the daughter that she gave up years before, while on the run from dangerous men.',
      description: "Ironically, these tale about a mother and daughter, fails because the male characters have no depth. The villain is evil sure, but also extremely stupid and escaping from her first attempt to kill him in a very unbelievable and unexplained way.\n\nThe romantic tension between Cruise and the mother also doesn't work and the age old friendship with Jons is also not given any backstory. I'm enclined to blame the casting here. Well, the story was lacking and oddly edited as well, but it may be because there wasn't much to work with. Either way, it's clear this is supposed to be about a mother/daughter relationship, but also be an action move and the director / writers / actors couldn't make it work. 3/10, 2 points cause I've seen worse, not because I can find something positive in it. "
    },
    {id:12, 
      ide: 1,
      cat: "Bollywood",
      for: "ArticleList",
      date:' 23 December, 2016 ',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKsquj5m5yhelBaw8qTuwVTKb7gInstdA5BJj1331iq0UXmWPu',
      title:'Missmatched ',
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
    },  
    {id:13, 
      ide:2,
      cat: "Bollywood",
      for: "ArticleList",
      sp:"home-latestArt",
      date:' 25 January, 2023',
      img: 'https://m.media-amazon.com/images/M/MV5BN2QwZmNhZjctZDZkMi00Mjk2LTg4OWMtNGEzMjk1ZWIwN2IzXkEyXkFqcGdeQXVyNDY4NjAxNTc@._V1_FMjpg_UX1000_.jpg',
      title:'Gullakh',
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
    },{
      id: 14,
      ide:3,
      cat: "Bollywood",
      for: "ArticleList",
      date:" 06 September, 2019 ",
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTv1gBc_zDDv_kf6KUf8YnDUZZqlj4-hf5BiSfdXh-MrXuLqQuj",
      title: "The Family Man ",
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
    },
    {
      id: 15,
      ide:4,
      cat: "Bollywood",
      for: "ArticleList",
      img:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQyMjLbEgkc7REBgwkuFFzl4V-1vwV657rBOGGrVd2ipT7ladiC",
      title: "Flames",
      date: "11 January, 2019",
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
    },
    {
      id: 16,
      ide:5,
      cat: "Bollywood",
      for: "ArticleList",
      date:" 19 December, 2014",
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRMPisealjBBVmXCI4LMmp7PcMo7GwUGM1GCIWVq0VOlPWItieS",
      title: "Special OPS",
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
    },
    {
      id: 17,
      ide:6,
      cat: "Bollywood",
      for: "ArticleList",
      date:" 22 December, 2017",
      img2:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRFbMBp7wTsPR0h39GrhCUt7kpFcg0J5Ilzz6Q_jr2NfptEt6eN",
      img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRFbMBp7wTsPR0h39GrhCUt7kpFcg0J5Ilzz6Q_jr2NfptEt6eN",
      title: "Delhi Crime",
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
    },
    {
      id: 20,
      ide:9,
      cat: "Bollywood",
      for: "TheTopList",
      sp: "home-Toplist",
      date:"14 April, 2022 ",
      img: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpbXuHlztgvM0rj9LA5PQlLPrsz4jqEtUk4g&usqp=CAU",
      title: "Baazi ",
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
    },
    {
      id: 21,
      ide:10,
      cat: "Bollywood",
      for: "TopList",
      date:" 25 December, 2009 ",
      img: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTahgQNsCzexuH8X0KpTC-3RXsYIGE66BhvFg&usqp=CAU",
      title: "Dosti",
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
    },
    {
      id: 22,
      ide:11,
      cat: "Bollywood",
      for: "TopList", 
       date:"12 July, 2019 ",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNURk1lNk2NB9F9s0mJDhux7yknIBpObYJog&usqp=CAU ",
      title: "Venky",
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
    },
    {
      id: 23,
      ide:1,
      cat: "Food",
      for: "ArticleList", 
       date:" MAY 15, 2023",
      img: "https://www.intrepidtravel.com/adventures/wp-content/uploads/2018/01/1.-Pani-Puri2-e1515190204477.jpg",
      title: "Pani poori",
      

    },
    {
      id: 24,
      ide:2,
      cat: "Food",
      for: "ArticleList", 
       date:"MAY 8, 2023 ",
       sp: "home-latest",
      img: "https://www.intrepidtravel.com/adventures/wp-content/uploads/2018/01/2.-Kati-Roll-e1515190175192.jpg",
      title: "Kathi Roll",
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
    },

    {
      id: 25,
      ide:3,
      cat: "Food",
      for: "ArticleList", 
       date:" MAY 1, 2023",
      img: "https://www.intrepidtravel.com/adventures/wp-content/uploads/2018/01/3.-Dosa-e1515190057670.jpg",
      title: "Masala Dosa",
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, " 
       
    },

    {
      id: 26,
      ide:4,
      cat: "Food",
      for: "ArticleList", 
       date:"APRIL 25, 2023 ",
      img: "https://www.intrepidtravel.com/adventures/wp-content/uploads/2018/01/4.-Thali-e1515189946271.jpg",
      title: "Thali",
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
    },

    {
      id: 27,
      ide:5,
      cat: "Food",
      sp:"home-latestArt",
      for: "ArticleList", 
       date:" APRIL 24, 2023",
      img: "https://www.intrepidtravel.com/adventures/wp-content/uploads/2018/01/5.-Gulab-Jamun--e1515189918893.jpg",
      title: "Gulab Jamun",
   
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
    },

    {
      id: 28,
      ide:6,
      cat: "Food",
      for: "ArticleList", 
       date:"APRIL 17, 2023 ",
      img: "https://www.intrepidtravel.com/adventures/wp-content/uploads/2018/01/6.-Chole-Bhature-e1515189587583.jpg",
      title: " Chole Bhature",
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
    },

    {
      id: 29,
      ide:7,
      cat: "Food",
      for: "ArticleList", 
       date:"APRIL 10, 2023 ",
      img: "https://cdn.tasteatlas.com//Images/Dishes/f77866f0f5474fc0b41d316f885edcc3.jpg?w=905&h=510",
      title: "Pav bhaji",
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
    },

    {
      id: 30,
      ide:8,
      cat: "Food",
      for: "TheTopList", 
      sp: "home-ToplistA",
       date:" APRIL 3, 2023",
      img: "https://cdn.tasteatlas.com//Images/Dishes/99d92862af9a42a2973a8213144f39ca.jpg?w=905&h=510",
      title: "Rogan josh",
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
    },

    {
      id: 31,
      ide:9,
      cat: "Food",
      for: "TopList", 
       date:"MARCH 27, 2023 ",
      img: "https://cdn.tasteatlas.com//images/dishes/4f3d4d079fce4c2ebda620d8717ae358.jpg?w=905&h=510",
      title: "Kulfi",
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
    },

    {
      id: 32,
      ide:10,
      cat: "Food",
      for: "TopList", 
       date:" MARCH 13, 2023",
      img: "https://cdn.tasteatlas.com//images/dishes/55f00ba4fe8746a68b8ad62b24226e3b.jpg?w=905&h=510",
      title: "Chicken",
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
    },

    {
      id: 33,
      ide:11,
      cat: "Food",
      for: "TopList", 
       date:"MARCH 6, 2023 ",
      img: "https://cdn.tasteatlas.com//Images/Dishes/b4deb1913b6b48c2baff9e6cf8d25923.jpg?w=905&h=510",
      title: "Pakora",
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
    },

    {
      id: 34,
      ide:1,
      cat: "Fitness",
      for: "ArticleList", 
       date:"25/05/23  ",
      img: "https://marketplace.canva.com/EAFNtg_jbyY/1/0/1600w/canva-yellow-creative-modern-register-gym-instagram-post-v8txVROjitQ.jpg",
      title: "Supliments ",
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
    },
    {
      id: 35,
      ide:2,
      cat: "Fitness",
      for: "ArticleList", 
       date:" 25/05/23 ",
      img: "https://images.pexels.com/photos/4098228/pexels-photo-4098228.jpeg?auto=compress&cs=tinysrgb&w=600",

      title: "Common Stress Questions",
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
    },

    {
      id: 36,
      ide:3,
      cat: "Fitness",
      sp: "home-latest",
      for: "ArticleList", 
       date:"25/05/23  ",
      img: "https://static.vecteezy.com/system/resources/previews/005/433/835/original/two-men-jogging-at-the-park-free-vector.jpg",
      title: "Jogging",
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
    },
    {
      id: 37,
      ide:4,
      cat: "Fitness",
      for: "ArticleList", 
       date:"25/05/23  ",
      img: "https://images.thequint.com/thequint%2F2022-07%2Fe2305be9-e9da-491e-9955-cebaba47b7f2%2Fwarrior_pose_from_yoga_picture_id498058082.jpg",
      title: "Yoga",
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, " },
    {
      id: 38,
      ide:5,
      cat: "Fitness",
      for: "ArticleList", 
      sp:"home-latestArt",
       date:"25/05/23  ",
      img: "https://images.theconversation.com/files/471436/original/file-20220628-14381-27bw08.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
      title: "Weight Loss",
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
      
    },
    {
      id: 39,
      ide:6,
      cat: "Fitness",
      for: "ArticleList", 
       date:" 25/05/23 ",
      img: "https://thumbs.dreamstime.com/z/there-love-everyone-concept-4754747.jpg",
      title: "Love Everyone",
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
    },
    {
      id: 40,
      ide:7,
      cat: "Fitness",
      for: "ArticleList", 
       date:" 25/05/23 ",
      img: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlraW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      title: "Fresh Start Effect",
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
     
    },
    {
      id: 41,
      ide:8,
      cat: "Fitness",
      for: "TheTopList", 
      sp: "home-ToplistA",
       date:"25/05/23 ",
      img: "https://images.pexels.com/photos/4098228/pexels-photo-4098228.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Common stress-related questions",
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
    },
    {
      id: 42,
      ide:9,
      cat: "Fitness",
      for: "TopList", 
       date:" ",
      img: "https://images.theconversation.com/files/471436/original/file-20220628-14381-27bw08.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
      title: "talking bis important",
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
    },
    {
      id: 43,
      ide:10,
      cat: "Fitness",
      for: "TopList", 
       date:"25/05/23  ",
      img: "https://www.kimp.io/wp-content/uploads/2022/07/pexels-the-lazy-artist-gallery-2247179.jpg",
      title: "Join Gym",
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
      
    },
    {
      id: 44,
      ide:11,
      cat: "Fitness",
      for: "TopList", 
       date:"25/05/23 ",
      img: "https://assets.precisionnutrition.com/2022/07/TWITTER-lose-weight-id1325862997-768x384.jpg",
      title: "Lose 50, 75, 100+ pounds ",
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
    },
    {
      id: 45,
      ide:1,
      sp: "home-ban",
      cat: "Technology",
      for: "ArticleList", 
       date:"BY SCOTT STEIN ",
      img2: "https://www.cnet.com/a/img/resize/0b173307ae96ad67c12d5be249756ea2410a294c/hub/2023/05/11/becf5d26-cac0-4b93-9e45-3aeae8e93eb2/indy.jpg?auto=webp&fit=crop&height=228&width=416",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Shadow_Hand_Bulb_large.jpg/640px-Shadow_Hand_Bulb_large.jpg",
      title: "Robotics",
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
    },
    {
      id: 46,
      ide:2,
      cat: "Technology",
      sp: "home-latest",
      for: "ArticleList", 
       date:"BY SCOTT STEIN ",
      img: "https://www.cnet.com/a/img/resize/dc11b6c1d23354ae419e97c505a979c2f4753693/hub/2022/10/19/6cea4c49-d6cd-4e16-96c0-e44db2a7f29a/oculus-quest-2-vr-virtual-reality-1102.jpg?auto=webp&fit=crop&height=228&width=416",
      title: "Meta Quest 3: What to Expect in 2023",
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
    },
    {
      id: 47,
      ide:3,
      cat: "Technology",
      for: "ArticleList", 
      sp:"home-latestArt",
       date:"BY LISA ",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Data_types_-_en.svg",
      title: "Data",
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
    },
    {
      id: 48,
      ide:4,
      cat: "Technology",
      for: "ArticleList", 
       date:"BY LISA ",
      img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ3dxVitFJ4MD-i26vvBnWAW3aEcGEoWVPdnu-o8h4QiqRk0aoO",
      title: "Copputing",
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
    },
    {
      id: 49,
      ide:5,
      cat: "Technology",
      for: "ArticleList", 
       date:" BY SCOTT ",
      img: "https://www.bio.org/sites/default/files/styles/bio_media_side_card_auto/public/2019-09/About-Page-health_Image.jpg?itok=RiQaIqjV",
      title: "Biotechnology",
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
    },
  
    {
      id: 50,
      ide:6,
      cat: "Technology",
      for: "ArticleList", 
       date:" BY DANIEL",
      img: "https://alltogether.swe.org/wp-content/uploads/2021/11/GettyImages-1256323645.png",
      title: "Biomedical Enginearing",
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
    },
    {
      id: 51,
      ide:7,
      cat: "Technology",
      for: "ArticleList", 
       date:"BY MEARA ",
      img: "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2021/10/20101154/abstract_money_cybercrime.jpg",
      title: "Cyber Crime",
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
    },
    {
      id: 52,
      ide:8,
      cat: "Technology",
      for: "TopList", 
       date:" BY LINDSAY ",
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ7KYZoo8RcLm4-eFuXn1KmFOWPC653gMNdhH8ouxpb5Q6-J4sh",
      title: "Data Science",
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
    },
    {
      id: 53,
      ide:9,
      cat: "Technology",
      for: "TheTopList", 
      sp: "home-ToplistA",
       date:"BY EDWARD  ",
      img: "https://elearningindustry.com/wp-content/uploads/2022/11/shutterstock_1798672534.jpg",
      title: "Educational Technology",
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
    },
    {
      id: 54,
      ide:10,
      cat: "Technology",
      for: "TopList", 
       date:" BY JAMES ",
      img: "https://cdn.britannica.com/40/216540-138-14385CFE/How-machine-learning-is-predicting-synthetic-products.jpg?w=800&h=450&c=crop",
      title: "Machine Larning",
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
    },
    {
      id: 55,
      ide:11,
      cat: "Technology",
      for: "TopList", 
       date:"BY SCOTT ",
      img: "https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2019/01/Computer-Security.png",
      title: "Couputer Security",
      Overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, "
    },



  ]);

  return (
    <AppData.Provider value={[data, setdata]}>
      {/* <Home/> */}
      {props.children}
    </AppData.Provider>
  );
}

export default Store;
