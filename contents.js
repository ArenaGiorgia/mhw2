function creaOgg(nome, immagine, descrizione) {

    this.nome = nome;
    this.immagine = immagine;
    this.descrizione = descrizione;

}

const cont1 = new creaOgg('Analisi del sangue', 'img/blood-1813410_1920.jpg', "L'esame del sangue è una tecnica di diagnostica medica che, attraverso il prelievo di sangue venoso, valuta i parametri ematici del paziente evidenziando il suo stato di salute generale");
const cont2 = new creaOgg('Profilo metabolico', 'img/celiachia.jpeg', "La celiachia è una reazione immunitaria all’assunzione di glutine; a lungo andare questa reazione produce un’infiammazione che danneggia il rivestimento dell’intestino tenue e impedisce l’assorbimento di alcuni nutrienti");
const cont3 = new creaOgg('Intolleranze Alimentari', 'img/intolleranze.jpg', "Le intolleranze alimentari fanno parte di un più vasto gruppo di disturbi definiti come reazioni avverse al cibo: si parla di intolleranza alimentare, piuttosto che di allergia, quando la reazione non è provocata dal sistema immunitario");
const cont4 = new creaOgg('Dosaggio delle IgE specifiche per Allergie', 'img/ige-totali.jpg', "Questo test misura la concentrazione ematica di IgE allergene-specifiche per individuare un’allergia ad uno specifico allergene.");
const cont5 = new creaOgg('Intolleranza Genetica al lattosio', 'img/lattosio.jpg', "L'intolleranza al lattosio è una condizione in cui il consumo di lattosio provoca una reazione avversa non allergica che si manifesta con disturbi gastrointestinali come ad esempio gonfiore, dolore crampiforme, diarrea ed eventualmente nausea.");
const cont6 = new creaOgg('Esame citologico delle urine', 'img/urine.jpg', "L’esame delle urine è un comune test che consente di diagnosticare eventuali patologie a carico dell’apparato urinario e di verificare la funzionalità renale");
const cont7 = new creaOgg('Screening Oncologico', 'img/screening.jpg', "Gli screening oncologici servono a individuare precocemente i tumori, o i loro precursori, quando non hanno ancora dato segno di sé.");
const cont8 = new creaOgg('Dosaggio Ormonale', 'img/DosaggiOrmonali.jpg', "Attraverso l’esame del dosaggio ormonale possiamo andare a fare una vera e propria valutazione della concentrazione di questi ormoni nel flusso ematico e, di conseguenza, possiamo anche valutare il funzionamento delle ghiandole endocrine che li producono.");
const cont9 = new creaOgg('Cistografia', 'img/cistoscopia.jpg', "La cistografia è un esame radiologico che permette di studiare l'anatomia e la funzionalità di vescica e uretra.");
const cont10 = new creaOgg('Bilirubina totale e parziale', 'img/fegato.jpg', "L'esame della bilirubina ne misura la concentrazione nel sangue per valutare la funzionalità epatica o per diagnosticare l'anemia causata dal danno o degrado dei globuli rossi (anemia emolitica)");
const cont11 = new creaOgg('Esame della Tiroide', 'img/tiroide.jpg', "Nella lista degli esami della tiroide, figurano: gli esami visivo e palpatorio della tiroide, la quantificazione dei livelli ematici degli ormoni tiroidei T3 e T4, e dell'ormone ipofisario TSH, l'ecografia tiroidea, il test degli autoanticorpi tiroidei, la scintigrafia tiroidea e l'agobiopsia della tiroide.");
const cont12 = new creaOgg('Genetica', 'img/genetica.jpg', "Il test genetico è l'insieme delle analisi di DNA, RNA, cromosomi, metaboliti e altri prodotti genici, effettuata per evidenziarne alterazioni correlate con patologie ereditarie.");


//array di contenuti 
const contenuti = [cont1, cont2, cont3, cont4, cont5, cont6, cont7, cont8, cont9, cont10, cont11, cont12];