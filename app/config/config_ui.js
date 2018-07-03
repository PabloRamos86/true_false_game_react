export const MASTER = {
  "name":"detector de noticias falsas",
  "type_app_text":"news",
  "initial_text":"¿sabrías decir si las siguientes noticias son verdaderas o falsas? aprende a distinguirlas, que no te tomen por tonto",
  "instructions":"marca verdadero o falso para cada una de las noticias propuestas. irás obteniendo una puntuación según cuantas aciertes.",
  "with_reset_button": true,
  "with_fullscreen": true,
  "feedback2_right": "la noticia es real",
  "feedback2_wrong": "la noticia es falsa",
  "message_pro": "eres un crack, ¡a ti no hay quien te engañe! sabemos que no necesitas que te enseñemos cómo reconocer fuentes fiables, pero aquí te dejamos un pequeño vídeo por si quieres saber más:",
  "message_good": "lo has hecho bastante bien, pero has fallado algunas. revisa el siguiente video para aprender a detectar fuentes fiables:",
  "message_ok": "no has acertado muchas. es muy importante detectar bien las fuentes fiables para una navegación segura. Te dejamos un video para que aprendas a detectarlas:",
  "modal_inst": "¿sabes qué noticias son verdaderas y falsas? contesta lo más rápido que puedas, para sumar puntos y conviértete en experto detector de fake news. los controles son muy sencillos, solo tienes que pulsar verdadero o falso en los botones centrales.",
  "progress_text": "noticias contestadas",
  "task_list": "lista de noticias a contestar",
  "final_video": "https://www.youtube.com/embed/-2PLx_udcK8?rel=0",
  "questions": [
    { "path": "https://estiloconsalud.com/con-2-ingrediente-hice-un-remedio-que-acabo-con-10-anos-de-diabetes-en-solo-5-dias-dile-adios/",
      "type": "iframe",
      "source_name": "Eliminar diabetes con dos ingredientes",
      "source_url": "https://estiloconsalud.com/con-2-ingrediente-hice-un-remedio-que-acabo-con-10-anos-de-diabetes-en-solo-5-dias-dile-adios/",
      "secure": true,
      "true_or_false": false,
      "score": 20,
      "feedback_path": "http://saludsinbulos.com/alertas/diabetes-dos-ingredientes/",
      "feedback_search": "https://www.google.es/search?q=diabetes+dos+ingredientes+bulo",
      "feedback_sitename": "saludsinbulos"
    },
    { "path": "./assets/images/quiz/phishing/phishing02.png",
      "source_name": "Olivia Pareja, venta zapatos",
      "source_url": "http://www.oliviapareja.es/",
      "secure": false,
      "true_or_false": false,
      "score": 10,
      "feedback_path": "./assets/images/quiz/phishing/phishing02_feedback.png",
      "feedback_text": ""
    },
    { "path": "./assets/images/quiz/phishing/phishing01.png",
      "source_name": "Banco Santander",
      "source_url": "http://www.bitidlma.com/s4nbnc/San/Home.php?i=tablet.bancosantander.es/supernetLogin/indexSan.html?tsid=20182140546#!login",
      "secure": false,
      "true_or_false": false,
      "score": 10,
      "feedback_path": "./assets/images/quiz/phishing/phishing01_feedback.png",
      "feedback_text": ""
    },
    { "path": "./assets/images/quiz/phishing/phishing05.png",
      "source_name": "Movistar",
      "source_url": "http://www.thescreenroomstore.com/phonemoviees/",
      "secure": false,
      "true_or_false": false,
      "score": 10,
      "feedback_path": "./assets/images/quiz/phishing/phishing05_feedback.png",
      "feedback_text": ""
    },
    { "path": "./assets/images/quiz/tests/noticia1.png",
      "source_name": "ABC",
      "source_url": "www.abc.es/espana/catalunya/abci-exconsejera-ponsati-cuestiona-junqueras-desde-bruselas-y-apuesta-nuevas-elecciones-antes-pedir-perdon-201802031649_noticia.html",
      "secure": true,
      "true_or_false": true,
      "score": 5,
      "feedback_path": "./assets/images/quiz/tests/noticia1s.png",
      "feedback_text": "La noticia es verdadera, viene de un medio nacional, el periódico ABC.",
      "with_margins": true
    },
    { "path": "./assets/images/quiz/tests/noticia2.png",
      "source_name": "ABC",
      "source_url": "www.abc.es/economia/abci-draghi-principal-obstaculo-para-guindos-201802030215_noticia.html",
      "secure": true,
      "true_or_false": true,
      "score": 5,
      "feedback_path": "./assets/images/quiz/noticia2s.png",
      "feedback_text": " La noticia es verdadera.",
      "with_margins": true
    },
    { "path": "./assets/images/quiz/tests/noticia3.png",
      "source_name": "Veterinarios.info",
      "source_url": "http://www.veterinarios.info/2797/espana-crea-un-cuerpo-de-policia-que-velara-por-los-derechos-de-los-animales-compartelo/",
      "secure": false,
      "true_or_false": false,
      "score": 15,
      "feedback_path": "./assets/images/quiz/tests/noticia3s.png",
      "feedback_text": "La noticia es falsa. Hay que fijarse que es un blog y conviene contrastar la información, además anima a difundirlo, que siempre lleva a la sospecha. Una rápida búsqueda en Google y verás que es falsa.",
      "with_margins": true
    },
  ]
};



export const PHISHING = {
  name:"detector de phishing",
  type_app_text:"phishing",
  initial_text:"¿sabrías decir si las siguientes webs son verdaderas o falsas? aprende a distinguirlas, que no te la cuelen",
  instructions:"marca verdadero o falso para cada una de las noticias propuestas. irás obteniendo una puntuación según cuantas aciertes.",
  with_reset_button: false,
  with_fullscreen: true,
  feedback2_right: "la web es real",
  feedback2_wrong: "la web es falsa",
  message_pro: "eres un crack, ¡a ti no hay quien te engañe! sabemos que no necesitas que te enseñemos cómo reconocer webs fiables, pero aquí te dejamos un pequeño vídeo por si quieres saber más:",
  message_good: "lo has hecho bastante bien, pero has fallado algunas. revisa el siguiente video para aprender a detectar webs fiables:",
  message_ok: "no has acertado muchas. Es muy importante detectar bien las webs fiables para una navegación segura. te dejamos un video para que aprendas a detectarlas:",
  modal_inst: "¿sabes qué webs son reales y falsas? contesta lo más rápido que puedas, para sumar puntos y conviértete en experto en phishing. los controles son muy sencillos, solo tienes que pulsar verdadero o falso en los botones centrales.",
  progress_text: "webs contestadas",
  task_list: "lista de webs a contestar",
  final_video: "https://www.youtube.com/embed/Hq813P5FXwE?rel=0",
  survey: "https://docs.google.com/forms/d/e/1FAIpQLSdiEVIf3g2VpDrcatqda-k-kbJ8yrccxGxxU_ZLYwPKrFYPWA/viewform",
  questions: [
    { "path": "./assets/images/quiz/phishing/phishing01.png",
      "source_name": "Banco Santander",
      "source_url": "http://www.bitidlma.com/s4nbnc/San/Home.php?i=tablet.bancosantander.es/supernetLogin/indexSan.html?tsid=20182140546#!login",
      "secure": false,
      "true_or_false": false,
      "score": 10,
      "feedback_path": "./assets/images/quiz/phishing/phishing01_feedback.png",
      "feedback_text": ""
    },
    { "path": "./assets/images/quiz/phishing/phishing02.png",
      "source_name": "Olivia Pareja, venta zapatos",
      "source_url": "http://www.oliviapareja.es/",
      "secure": false,
      "true_or_false": false,
      "score": 10,
      "feedback_path": "./assets/images/quiz/phishing/phishing02_feedback.png",
      "feedback_text": ""
    },
    { "path": "./assets/images/quiz/phishing/phishing03.png",
      "source_name": "Banco ING Direct",
      "source_url": "ing.ingdirect.es/pfm/#login/credentials",
      "secure": true,
      "true_or_false": true,
      "score": 10,
      "feedback_path": "./assets/images/quiz/phishing/phishing03_feedback.png",
      "feedback_text": ""
    },
    { "path": "./assets/images/quiz/phishing/phishing04.png",
      "source_name": "UGG venta zapatos",
      "source_url": "http://uggvipmall.com/",
      "secure": false,
      "true_or_false": false,
      "score": 10,
      "feedback_path": "./assets/images/quiz/phishing/phishing04_feedback.png",
      "feedback_text": ""
    },
    { "path": "./assets/images/quiz/phishing/phishing05.png",
      "source_name": "Movistar",
      "source_url": "http://www.thescreenroomstore.com/phonemoviees/",
      "secure": false,
      "true_or_false": false,
      "score": 10,
      "feedback_path": "./assets/images/quiz/phishing/phishing05_feedback.png",
      "feedback_text": ""
    },
    { "path": "./assets/images/quiz/phishing/phishing06.png",
      "source_name": "Netflix registro",
      "source_url": "www.netflix.com/signup/regform",
      "feedback_text": "",
      "secure": true,
      "true_or_false": true,
      "score": 10,
      "feedback_path": "./assets/images/quiz/phishing/phishing06_feedback.png"
    },
    { "path": "./assets/images/quiz/phishing/phishing07.png",
      "source_name": "Banco BBVA",
      "source_url": "217.61.97.40/bbva-es/login.php?connexion=581064859121-795980693947419044042968889935&error=false&login=9651423418138&attempt=581064859121-795980693947419044042968889935&error=false&login=9651423418138",
      "secure": false,
      "true_or_false": false,
      "score": 10,
      "feedback_path": "./assets/images/quiz/phishing/phishing07_feedback.png",
      "feedback_text": ""
    },
    { "path": "./assets/images/quiz/phishing08.png",
      "source_name": "Pandora, venta joyería",
      "source_url": "http://www.ptoshmarks.com/index/",
      "secure": false,
      "true_or_false": false,
      "score": 10,
      "feedback_path": "./assets/images/quiz/phishing/phishing08_feedback.png",
      "feedback_text": ""
    },
    { "path": "./assets/images/quiz/phishing/phishing09.png",
      "source_name": "Tuenti movil, contratar",
      "source_url": "www.tuenti.es/checkout/?uuid=Septiembre_2017_D10_1_Postpay",
      "secure": true,
      "true_or_false": true,
      "score": 10,
      "feedback_path": "./assets/images/quiz/phishing/phishing09_feedback.png",
      "feedback_text": ""
    },
    { "path": "./assets/images/quiz/phishing/phishing10.png",
      "source_name": "Recompensas Google",
      "source_url": "http://iw0gdtkm.uqsq.online/?sov=786337448&hid=bpjtptnhbddf&ref=dm&&noalert=1&cntrl=00100&pid=555&redid=491&gsid=68&campaign_id=42&p_id=555&id=XNSX.6225%3A%3A4516%3A%3A%3A%3A%3A%3A92.177.180.46-r491-t68&impid=6e310904-2837-11e8-86a3-4e4e3e1c4387",
      "secure": false,
      "true_or_false": false,
      "score": 10,
      "feedback_path": "./assets/images/phishing/quiz/phishing10_feedback.png",
      "feedback_text": ""
    }
  ]
};

export const HEALTH = {
  name:"detector de noticias falsas sobre salud",
  type_app_text:"health",
  initial_text:"¿sabrías decir si las siguientes noticias son verdaderas o falsas? aprende a distinguirlas, no juegues con tu salud",
  instructions:"marca verdadero o falso para cada una de las noticias propuestas. irás obteniendo una puntuación según cuantas aciertes.",
  with_reset_button: false,
  with_fullscreen: true,
  feedback2_right: "la noticia es real",
  feedback2_wrong: "la noticia es falsa",
  message_pro: "eres un crack, ¡a ti no hay quien te engañe! sabemos que no necesitas que te enseñemos cómo reconocer fuentes fiables, pero aquí te dejamos un pequeño vídeo por si quieres saber más:",
  message_good: "lo has hecho bastante bien, pero has fallado algunas. revisa el siguiente video para aprender a detectar fuentes fiables:",
  message_ok: "no has acertado muchas. es muy importante detectar bien las fuentes fiables para una navegación segura. Te dejamos un video para que aprendas a detectarlas:",
  modal_inst: "¿sabes qué noticias son verdaderas y falsas? contesta lo más rápido que puedas, para sumar puntos y conviértete en experto detector de fake news. los controles son muy sencillos, solo tienes que pulsar verdadero o falso en los botones centrales.",
  progress_text: "noticias contestadas",
  task_list: "lista de noticias a contestar",
  final_video: "https://www.youtube.com/embed/Hq813P5FXwE?rel=0",
  survey: "https://docs.google.com/forms/d/e/1FAIpQLSdiEVIf3g2VpDrcatqda-k-kbJ8yrccxGxxU_ZLYwPKrFYPWA/viewform",
  questions: [
    { "path": "https://estiloconsalud.com/con-2-ingrediente-hice-un-remedio-que-acabo-con-10-anos-de-diabetes-en-solo-5-dias-dile-adios/",
      "type": "iframe",
      "source_name": "eliminar la diabetes con dos ingredientes",
      "source_url": "https://estiloconsalud.com/con-2-ingrediente-hice-un-remedio-que-acabo-con-10-anos-de-diabetes-en-solo-5-dias-dile-adios/",
      "secure": true,
      "true_or_false": false,
      "score": 10,
      "feedback_path": "http://saludsinbulos.com/alertas/diabetes-dos-ingredientes/",
      "feedback_search": "https://www.google.es/search?q=diabetes+dos+ingredientes+bulo",
      "feedback_sitename": "saludsinbulos"
    },
    { "path": "http://www.dietametabolica.es/lacteos.htm",
      "type": "iframe",
      "source_name": "lacteos sí, pero no pasteurizados",
      "source_url": "http://www.dietametabolica.es/lacteos.htm",
      "secure": false,
      "true_or_false": false,
      "score": 10,
      "feedback_path": "http://saludsinbulos.com/detras-del-titular/leche-sin-pasteurizar/",
      "feedback_search": "https://www.google.es/search?q=leche+sin+pasteurizar+bulo",
      "feedback_sitename": "saludsinbulos"
    },
    { "path": "https://elpais.com/elpais/2018/04/02/buenavida/1522699942_976535.html",
      "type": "iframe",
      "source_name": "alergia a los gatos, ¿tengo que deshacerme de él?",
      "source_url": "https://elpais.com/elpais/2018/04/02/buenavida/1522699942_976535.html",
      "secure": true,
      "true_or_false": true,
      "score": 10,
      "feedback_path": "",
      "feedback_search": "",
      "feedback_sitename": ""
    },
    { "path": "https://elpais.com/elpais/2018/03/16/tentaciones/1521192377_540924.html",
      "type": "iframe",
      "source_name": "patentada una tijera que corta el pelo a fuego",
      "source_url": "https://elpais.com/elpais/2018/03/16/tentaciones/1521192377_540924.html",
      "secure": true,
      "true_or_false": false,
      "score": 10,
      "feedback_path": "http://saludsinbulos.com/detras-del-titular/alopecia-peluquero-tijera-pelo-fuego/",
      "feedback_search": "https://www.google.es/search?q=tijera+pelo+alopecia+bulo",
      "feedback_sitename": "saludsinbulos"
    },
    { "path": "https://anabelavila.com/paleo/guia-dieta",
      "type": "iframe",
      "source_name": "dieta paleolítica",
      "source_url": "https://anabelavila.com/paleo/guia-dieta",
      "secure": true,
      "true_or_false": false,
      "score": 10,
      "feedback_path": "http://saludsinbulos.com/nutricion/dieta-paleolitica/",
      "feedback_search": "https://www.google.es/search?q=dieta+paleolitica+bulo",
      "feedback_sitename": "saludsinbulos"
    },
    { "path": "https://www.20minutos.es/noticia/3301842/0/crean-dispositivo-permite-detectar-meningitis-infantil-3-segundos/",
      "type": "iframe",
      "source_name": "dispositivo que detecta la meningitis infantil en 3 sec",
      "source_url": "https://www.20minutos.es/noticia/3301842/0/crean-dispositivo-permite-detectar-meningitis-infantil-3-segundos/",
      "secure": true,
      "true_or_false": true,
      "score": 10,
      "feedback_path": "",
      "feedback_search": "",
      "feedback_sitename": ""
    },
    { "path": "http://retoadelgaza.com/dieta-de-la-banana/",
      "type": "iframe",
      "source_name": "dieta de la banana",
      "source_url": "http://retoadelgaza.com/dieta-de-la-banana/",
      "secure": false,
      "true_or_false": false,
      "score": 10,
      "feedback_path": "http://saludsinbulos.com/detras-del-titular/dieta-banana/",
      "feedback_search": "https://www.google.es/search?q=dieta+banana+bulo",
      "feedback_sitename": "saludsinbulos"
    },
    { "path": "https://as.com/epik/2018/02/05/portada/1517845700_265782.html",
      "type": "iframe",
      "source_name": "patatas de McDonald's curan la calvicie",
      "source_url": "https://as.com/epik/2018/02/05/portada/1517845700_265782.html",
      "secure": true,
      "true_or_false": false,
      "score": 10,
      "feedback_path": "http://saludsinbulos.com/detras-del-titular/patatas-fritas-dimetilpolisiloxano-alopecia-calvicie/",
      "feedback_search": "https://www.google.es/search?q=bulo+patatas+mcdonalds+calvicie",
      "feedback_sitename": "saludsinbulos"
    },
    { "path": "http://www.elmundo.es/comunidad-valenciana/castellon/2018/03/20/5ab15bb0e2704ee2308b4760.html",
      "type": "iframe",
      "source_name": "17 horas sin dormir: límite al volante",
      "source_url": "http://www.elmundo.es/comunidad-valenciana/castellon/2018/03/20/5ab15bb0e2704ee2308b4760.html",
      "secure": false,
      "true_or_false": true,
      "score": 10,
      "feedback_path": "",
      "feedback_search": "",
      "feedback_sitename": ""
    },
    { "path": "http://www.bbc.com/mundo/noticias-38933890",
      "type": "iframe",
      "source_name": "arsénico el arroz que consumimos",
      "source_url": "http://www.bbc.com/mundo/noticias-38933890",
      "secure": false,
      "true_or_false": false,
      "score": 10,
      "feedback_path": "http://saludsinbulos.com/detras-del-titular/arsenico-arroz/",
      "feedback_search": "https://www.google.es/search?q=arsenico+arroz+bulo",
      "feedback_sitename": "saludsinbulos"
    }
  ]
};

export const HEALTH_02 = {
  name:"detector de noticias falsas sobre salud",
  type_app_text:"health",
  initial_text:"¿sabrías decir si las siguientes noticias son verdaderas o falsas? aprende a distinguirlas, no juegues con tu salud",
  instructions:"marca verdadero o falso para cada una de las noticias propuestas. irás obteniendo una puntuación según cuantas aciertes.",
  with_reset_button: false,
  with_fullscreen: true,
  feedback2_right: "la noticia es real",
  feedback2_wrong: "la noticia es falsa",
  message_pro: "eres un crack, ¡a ti no hay quien te engañe! sabemos que no necesitas que te enseñemos cómo reconocer fuentes fiables, pero aquí te dejamos un pequeño vídeo por si quieres saber más:",
  message_good: "lo has hecho bastante bien, pero has fallado algunas. revisa el siguiente video para aprender a detectar fuentes fiables:",
  message_ok: "no has acertado muchas. es muy importante detectar bien las fuentes fiables para una navegación segura. Te dejamos un video para que aprendas a detectarlas:",
  modal_inst: "¿sabes qué noticias son verdaderas y falsas? contesta lo más rápido que puedas, para sumar puntos y conviértete en experto detector de fake news. los controles son muy sencillos, solo tienes que pulsar verdadero o falso en los botones centrales.",
  progress_text: "noticias contestadas",
  task_list: "lista de noticias a contestar",
  final_video: "https://www.youtube.com/embed/Hq813P5FXwE?rel=0",
  survey: "https://docs.google.com/forms/d/e/1FAIpQLSdiEVIf3g2VpDrcatqda-k-kbJ8yrccxGxxU_ZLYwPKrFYPWA/viewform",
  questions: [
    /*{ "path": "url noticia falsa",
      "type": "iframe",
      "source_name": "título noticia falsa",
      "source_url": "url noticia falsa",
      "secure": true,
      "true_or_false": false,
      "score": 10,
      "feedback_path": "url desmintiendo noticia",
      "feedback_search": "búsqueda google",
      "feedback_sitename": "fuente que desmiente noticia"
    },*/
    { "path": "https://curacancernatural.org/tomate/",
      "type": "iframe",
      "source_name": "el tomate cura el cáncer",
      "source_url": "https://curacancernatural.org/tomate/",
      "secure": true,
      "true_or_false": false,
      "score": 10,
      "feedback_path": "https://maldita.es/malditaciencia/la-eterna-conspiracion-de-la-cura-secreta-del-cancer/",
      "feedback_search": "https://www.google.es/search?q=cura+contra+el+cancer+bulo",
      "feedback_sitename": "malditaciencia"
    },
    { "path": "http://www.dietox.es/info/el-metodo-dietox",
      "type": "iframe",
      "source_name": "el método dietox",
      "source_url": "http://www.dietox.es/info/el-metodo-dietox",
      "secure": false,
      "true_or_false": false,
      "score": 10,
      "feedback_path": "https://maldita.es/malditaciencia/todo-absolutamente-todo-lo-detox-es-un-timo/",
      "feedback_search": "https://www.google.es/search?q=dieta+detox+bulo",
      "feedback_sitename": "malditaciencia"
    },
        { "path": "https://www.abc.es/ciencia/abci-primera-imagen-confirmada-planeta-recien-nacido-201807021200_noticia.html",
      "type": "iframe",
      "source_name": "primera imagen de un planeta recién nacido",
      "source_url": "https://www.abc.es/ciencia/abci-primera-imagen-confirmada-planeta-recien-nacido-201807021200_noticia.html",
      "secure": true,
      "true_or_false": true,
      "score": 10,
      "feedback_path": "",
      "feedback_search": "",
      "feedback_sitename": ""
    },
    { "path": "http://blogs.publico.es/vicenc-navarro/2018/05/17/lo-que-se-esta-ocultando-a-los-usuarios-de-los-moviles-su-salud-puede-peligrar/",
      "type": "iframe",
      "source_name": "los móviles producen cáncer en el cerebro",
      "source_url": "http://blogs.publico.es/vicenc-navarro/2018/05/17/lo-que-se-esta-ocultando-a-los-usuarios-de-los-moviles-su-salud-puede-peligrar/",
      "secure": false,
      "true_or_false": false,
      "score": 10,
      "feedback_path": "https://maldita.es/malditaciencia/no-ni-los-moviles-ni-el-wifi-producen-cancer/",
      "feedback_search": "https://www.google.es/search?q=moviles+cancer+bulo",
      "feedback_sitename": "malditaciencia"
    },
    { "path": "http://www.elmundo.es/f5/descubre/2018/06/28/5b3486ed22601d77068b4615.html",
      "type": "iframe",
      "source_name": "nadie menciona la muerte de una famosa química",
      "source_url": "http://www.elmundo.es/f5/descubre/2018/06/28/5b3486ed22601d77068b4615.html",
      "secure": false,
      "true_or_false": false,
      "score": 10,
      "feedback_path": "https://maldita.es/bulo/no-no-es-verdad-que-la-prensa-no-mencionase-la-muerte-de-la-bioquimica-gabriela-morreale/",
      "feedback_search": "https://www.google.es/search?q=gabriela+morreale+bulo",
      "feedback_sitename": "malditaciencia"
    },
    { "path": "https://www.dsalud.com/reportaje/confirman-la-relacion-vacunas-autismo/",
      "type": "iframe",
      "source_name": "las vacunas causan autismo",
      "source_url": "https://www.dsalud.com/reportaje/confirman-la-relacion-vacunas-autismo/",
      "secure": true,
      "true_or_false": false,
      "score": 10,
      "feedback_path": "https://maldita.es/malditaciencia/no-las-vacunas-no-causan-autismo/",
      "feedback_search": "https://www.google.es/search?q=vacunas+autismo+bulo",
      "feedback_sitename": "malditaciencia"
    },
    { "path": "http://www.lasexta.com/noticias/ciencia-tecnologia/china-crea-rifle-laser-que-puede-abrasar-personas-casi-kilometro-distancia_201807025b39b8540cf29c268544cdde.html",
      "type": "iframe",
      "source_name": "china crea un rifle que abrasa a un kilómetro de distancia",
      "source_url": "http://www.lasexta.com/noticias/ciencia-tecnologia/china-crea-rifle-laser-que-puede-abrasar-personas-casi-kilometro-distancia_201807025b39b8540cf29c268544cdde.html",
      "secure": true,
      "true_or_false": true,
      "score": 10,
      "feedback_path": "",
      "feedback_search": "",
      "feedback_sitename": ""
    },
    { "path": "https://www.paraloscuriosos.com/a18841/5-razones-por-las-que-no-se-deberia-beber-agua-fria",
      "type": "iframe",
      "source_name": "el agua fría engorda",
      "source_url": "https://www.paraloscuriosos.com/a18841/5-razones-por-las-que-no-se-deberia-beber-agua-fria",
      "secure": true,
      "true_or_false": false,
      "score": 10,
      "feedback_path": "https://maldita.es/bulo/no-un-estudio-no-ha-demostrado-que-el-agua-fria-engorde/",
      "feedback_search": "https://www.google.es/search?q=agua+fria+engorda+bulo",
      "feedback_sitename": "malditaciencia"
    },
    { "path": "http://blog.nuestroclima.com/alineacion-planetaria-y-las-piramides-de-giza/",
      "type": "iframe",
      "source_name": "alineación planetaria con las pirámides de giza",
      "source_url": "http://blog.nuestroclima.com/alineacion-planetaria-y-las-piramides-de-giza/",
      "secure": false,
      "true_or_false": false,
      "score": 10,
      "feedback_path": "https://maldita.es/bulo/no-venus-saturno-y-mercurio-nunca-se-han-alineado-con-las-piramides-de-egipto/",
      "feedback_search": "https://www.google.es/search?q=alineacion+planetaria+con+piramides+bulo",
      "feedback_sitename": "malditaciencia"
    },
    { "path": "https://hipertextual.com/2018/06/ettore-majorana",
      "type": "iframe",
      "source_name": "físico italiano desaparece sin dejar rastro",
      "source_url": "https://hipertextual.com/2018/06/ettore-majorana",
      "secure": true,
      "true_or_false": true,
      "score": 10,
      "feedback_path": "",
      "feedback_search": "",
      "feedback_sitename": ""
    }
  ]
};
