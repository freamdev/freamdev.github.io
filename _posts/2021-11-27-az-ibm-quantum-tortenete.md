---
layout: post
title: Az IBM Quantum története a kezdetektől a napjainkig
date: 2021-11-27 12:00:00 +0100
summary: Az IBM Quantum története a kezdetektől a napjainkig.
categories: [quantum]
keywords: ibm, quantum, történelem
tags:
 - quantum
 - qiskit
 - ibm
---

## Alapítás

Amikor kvantuminformatikával foglalkozó cégekről beszélünk, talán az egyik első név,
amely mindenki számára beugrik, az az IBM. A New York-i vállalat 1911-ben jött létre
4 cég összeolvadásából, melyek mind 1-1 technológiai szabadalom köré épültek:
Julius E. Pitrap számító mérlege, Alexander Dey tárcsás időrögzítője, Herman Hollerith
elektromos tabulátora és Willard Bundy blokkolóórája. A vállalat Thomas J. Watson
elnöksége alatt hatalmas léptékben növekedett, különböző üzleti és ipari berendezések
forgalmazásával és kölcsönzésével több millió dolláros bevételre tettek szert és
terjeszkedtek Európa, Dél-Amerika, Ázsia és Ausztrália területén is. Watson 1924-ben
keresztelte a céget az International Business Machines, azaz az IBM névre.

![](/assets/img/2021-11-27-az-ibm-quantum-tortenete/original_ibm_logo.png)

Az eredeti IBM logó  
(Forrás: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Original_IBM_Logo.png))

A vállalat jelentős szerepet játszott a 20. századi történelemben. Megvalósították
az Egyesült Államok foglalkoztatási adatainak elektronikus kezelését, részt vettek
a második világháború fegyvergyártásában, kifejlesztették az első „öntanuló” programot,
mely dámajátékot játszott, megalkották a FORTRAN programozási nyelvet, részt vettek
több NASA vezette űrprogramban, köztük az 1969-es holdraszállásban is.

![](/assets/img/2021-11-27-az-ibm-quantum-tortenete/ibm_apollo_control_center.jpg)

Mérnökök az IBM-től egy Apollo kilövésnél, Cape Kennedy, Florida  
(Forrás: [ibm.com](https://www.ibm.com/blogs/think/2019/07/ibm-nasa-working-side-by-side-to-land-on-the-moon/))

1981-ben pedig bemutatták az első kommerciálisan használható személyi számítógépet,
ekkoriban szinte egyeduralkodóvá válva a számítógépes iparág piacán.

![](/assets/img/2021-11-27-az-ibm-quantum-tortenete/ibm_pc.png)

IBM PC  
(Forrás: [Wikipedia](https://en.wikipedia.org/wiki/File:IBM_PC-IMG_7271_(transparent).png))

_Források:_

* [Chronological History of IBM](https://www.ibm.com/ibm/history/history/history_intro.html)
* [Gordy, S. 2019. IBM & NASA: Working Side-by-Side to Land on the Moon](https://www.ibm.com/blogs/think/2019/07/ibm-nasa-working-side-by-side-to-land-on-the-moon/)

## Kezdetek

Shor (AT&T Bell Labs) 1994-es cikkében leírta a kvantum alapú prímfaktorizációs algoritmust,
mely hatalmas érdeklődést váltott ki, hiszen ennek segítségével az akkoriban és ma is
használt klasszikus titkosítási algoritmusok feltörhetővé válnának, ez pedig komoly
fenyegetést jelent mind harcászati mind ipari szempontból.

_Források:_

* [Shor, P.W., 1994, November. Algorithms for quantum computation: discrete logarithms and factoring. In _Proceedings 35th annual symposium on foundations of computer science_ (pp. 124-134). Ieee.](https://ieeexplore.ieee.org/abstract/document/365700)

2 évvel később, 1996-ban jelent meg az IBM első jelentős kvantuminformatikával kapcsolatos
cikke, David P. DiVincenzo elméleti fizikus tollából Topics in Quantum Computers címen,
melyben egy kvantumszámítógép megalkotásához szükséges minimális feltételeket és a hibajavítás
lehetséges módszertanát tárgyalja. Ebben a cikkben külön kiemeli Shor prímfaktorizációs
algoritmusát, mint a téma körüli érdeklődés fellángolásának indító lökését.

_Források:_

*   [DiVincenzo, D.P., 1997. Topics in quantum computers. In _Mesoscopic electron transport_ (pp. 657-677). Springer, Dordrecht.](https://link.springer.com/chapter/10.1007/978-94-015-8839-3_18)

## Az első, nukleáris mágneses rezonancián alapuló kvantumszámítógép

1998-ban 2-3 qubites NMR, azaz nukleáris mágneses rezonancia alapú "kvantumszámítógépekkel"
kísérleteznek. Ennek technológiának a lényege, hogy a mágneses mezőbe helyezett molekulák
atomjainak nukleuszaiban lévő, spinnel rendelkező részecskék kis mágnesrudakként viselkedve
a mágneses mezővel párhuzamos irányba állnak be, vagy a mező polaritásával egyező (stabil
egyensúlyi), vagy ellentétes (instabil egyensúlyi) irányban. Az egyező irány alacsonyabb,
az ellentétes magasabb energiaállapotot képvisel, ezeket lehet az |1> és a |0> bázisvektoroknak
megfeleltetni. Egy második, az első mező és a résztvevő molekulák tulajdonságaitól függő
frekvencián oszcilláló elektromágneses teret megfelelő ideig bekapcsolva elérhető, hogy a
részecskék 180 fokot fordulva az alacsonyabb energiájú stabil egyensúlyi állapotból a magasabb
energiájú instabil energiaállapotba váltsanak át. Amennyiben pontosan a szükséges időtartam
feléig kapcsoljuk be a mezőt, úgy a részecskék energiaállapota szuperpozícióba helyezhető:
$\frac{1}{2}$ és $\frac{1}{2}$ valószínűséggel lesz egy adott részecske a |0>, illetve az |1>
vektorhoz tartozó állapotban.

_Források:_

* [Gershenfeld, N. and Chuang, I.L., 1998. Quantum computing with molecules. _Scientific American_, 278(6), pp.66-71.](http://cba.mit.edu/docs/papers/98.06.sciqc.pdf)

Az NMR technológiát használva 1998-ban több kutatócsoportnak is sikerült a gyakorlatban
megvalósítania kvantumalgoritmus implementációt, köztük Chuang (IBM), Gershenfeld (MIT) és
Kubinec (Berkeley) csapatának a Grover algoritmust kloroform molekulákat felhasználva. Ez az
első alkalom, hogy egy kvantumszámítást az elejétől a végéig sikerült véghezvinni: a kezdeti
állapot betöltése, egy olyan számítás véghezvitele, mely a klasszikus alternatívánál kevesebb
lépést használ, végül pedig az eredmény kiolvasása.

_Források:_

* [Chuang, I.L., Gershenfeld, N. and Kubinec, M., 1998. Experimental implementation of fast quantum searching. _Physical review letters_, 80(15), p.3408.](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.80.3408)

Ugyanezen technológiát felhasználva 2001-ben demonstrálta először az IBM Shor prímfaktorizációs
algoritmusának gyakorlati megvalósítását. A kísérlet során a 15-ös számot sikerült kvantumszámítással
prímtényezőkre bontani, mely a technológia kezdetlegességét figyelembe véve akkoriban komoly
eredménynek számított. Ehhez 10^18 darab egyforma, az IBM kémikusai által kifejezetten erre a
célra tervezett 5 fluor és 2 szénatomból felépülő perfluorobutadienyl iron complex molekulát
használtak fel, mely egy 7 qubites kvantumszámítógépnek felelt meg.

![](/assets/img/2021-11-27-az-ibm-quantum-tortenete/perfluorobutadienyl_iron_complex.png)

A molekuláris kvantumszámítógép: perfluorobutadienyl iron complex  
(Forrás: [IBM Research: It’s been 20 years since "15" was factored on quantum hardware](https://research.ibm.com/blog/factor-15-shors-algorithm))

_Források:_

* [Vandersypen, L.M., Steffen, M., Breyta, G., Yannoni, C.S., Sherwood, M.H. and Chuang, I.L., 2001. Experimental realization of Shor's quantum factoring algorithm using nuclear magnetic resonance. _Nature_, 414(6866), pp.883-887.](https://www.nature.com/articles/414883a)
* [IBM Research Division., 2001. IBM's Test-Tube Quantum Computer Makes History; First Demonstration Of Shor's Historic Factoring Algorithm. _ScienceDaily._](https://www.sciencedaily.com/releases/2001/12/011220081620.htm)

Ahhoz, hogy egy nagyobb szám prímtényezős felbontását a Shor algoritmus segítségével
kiszámítsuk, 7-nél több qubitre, azaz nagyobb méretű molekulára van szükség. Sajnos, az
NMR technológiának egy komoly hátránya, hogy a működéséhez a qubiteknek egyetlen molekulán
belül kell elhelyezkedniük, melynek következtében nagyon nehezen skálázódik a technológia
8-10 qubit feletti mennyiségekre. Szerencsére már ekkoriban is voltak ötletek alternatív
technológiákra, melyekkel kvantumszámítógépet lehet létrehozni: elektronspin orientáción,
szennyezett félvezetőn, illetve szupravezetőkön alapuló technológiák, melyek ekkoriban még
kiforratlanok voltak, elterjedésükre még várni kellett.

Az NMR kísérletekkel kapcsolatban napvilágot látott több szkeptikus cikk, melyek kérdőre
vonják, hogy valóban kvantumos információfeldolgozás történt-e. Braunstein et al. 1999-es
cikkükben megmutatták, hogy az NMR rendszerekbenben nincs összefonódás a qubitek között,
Menicucci és Caves pedig 2002-ben konstruált egy klasszikus, rejtett változókon alapuló
modellt, mellyel 12 qubitig képesek voltak leírni az NMR alapokon működő kvantumszámítógépek
számításait. Ezekből az eredményekből sajnos arra lehet következtetni, hogy az NMR
kísérletek valószínűleg nem valódi kvantumos működést igazoltak, pusztán klasszikus
szimulációi voltak a kvantumszámítógépeknek.

_Források:_

* [Cramer, J.G., Decryption and Quantum Computing: Seven Qubits and Counting.](https://www.npl.washington.edu/av/altvw112.html)
* [Braunstein, S.L., Caves, C.M., Jozsa, R., Linden, N., Popescu, S. and Schack, R., 1999. Separability of very noisy mixed states and implications for NMR quantum computing. _Physical Review Letters_, 83(5), p.1054.](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.83.1054)
* [Menicucci, N.C. and Caves, C.M., 2002. Local realistic model for the dynamics of bulk-ensemble NMR information processing. _Physical review letters_, 88(16), p.167901.](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.88.167901)

A szupravezetésen alapuló kvantumszámítógép
-------------------------------------------

Az IBM már az 1950-es évek óta foglalkozik a szupravezetés jelenségének kutatásával. Ekkoriban
a céljuk a szupravezetés jelenségén alapuló klasszikus számítógép alkotóelemeinek, azon belül
konkrétan egy nagy teljesítményű memóriának a "cryotron" technológiai alapú megvalósítása volt.
A projektet 1958 és 1961 között az NSA szponzorálta a Project Lightning program keretében,
ami alatt egy 40 bites memóriát sikerült előállítani. Sajnos a projekt 1965-ig tartott, amikor
a mágneses filmen alapuló olcsó memóriák győztek a nagy teljesítményű, de drága szupravezetésen
alapuló technológia felett.

Az 1970-es években működött továbbá a Josephson program, melynek keretén belül a szupravezetőkkel
kapcsolatos makroszkopikus kvantumjelenségen, a Josephson-effektuson alapuló klasszikus processzoron
dolgoztak. A Josephson-csomópont nevű eszköz egy (például) szupravezető - szigetelő - szupravezető
rétegekből álló áramköri elem, melyben feszültség rákapcsolása nélkül folyik áram, aminek a
hővesztesége 0. Bár a programnak 1983-ban vége lett a szilikonos technológia elterjedésével, az
elért tudományos eredményeik felhasználásra kerültek a nagyfelbontású pásztázó SQUID mikroszkópok
és a mágneses gradiométerek megalkotása során. Utóbbiaknak egy későbbi változatát az Amerikai
Egyesült Államok Haditengerészete használja autonóm víz alatti járművekkel történő bombadetektálásra.

![](/assets/img/2021-11-27-az-ibm-quantum-tortenete/josephson_junction.jpg)

Josephson-csomópont áramköri elem  
(Forrás: [IBM Research](https://researcher.watson.ibm.com/researcher/view_group.php?id=7055))

Az 1990-es években az IBM dominanciája csökkenni látszott, ahogyan a CMOS alapú mikroprocesszoros
rendszerek előre törtek. Ez ártott az üzletnek, melynek következtében csökkent a kutatásra fordítható
pénzösszegek nagysága és a szupravezetőkkel kapcsolatos kutatási programok vesztettek a lendületükből.
Ez a tendencia 2000-es évek elején fordult meg, amikor a kvantuminformatika iránti érdeklődés
fellángolásával ismét új erőre tett szert az irányzat.

Eredetileg az IBM az NMR módszertannal kísérletezett, azonban a 2000-es évek elejére kiderült hogy
ez nem skálázódik jól. Ekkoriban látott napvilágot DiVincenzo egy újabb cikke, mely 5 pontba
foglalja a skálázható kvantumszámítógépekkel szemben támasztott elvárásokat:

1. Jól meghatározott qubitek skálázható fizikai rendszere.
2. A qubitek inicializálásának lehetősége egyszerű ismert állapotokba (például a |000..>-ba).
3. A kapu végrehajtási időnél jelentősen hosszabb dekoherencia idő.
4. Kvantumkapuk egy univerzális halmaza.
5. Qubitenkénti mérési lehetőség.

Ezek az elvárások "DiVincenzo kritériumok" néven híresültek el és azóta is alapvető fontosságúak a
skálázható kvantumszámítógépekkel kapcsolatos kutatásokban.

Ekkortájt kezdődtek el az IBM-nél a szupravezetőkkel kapcsolatos több mint 50 évnyi kutatási
tapasztalataikból kiindulva a Josephson-csomópont alapú qubitek kifejlesztésére és a DiVincenzo
kritériumok által motivált skálázható kvantumszámítógépek megalkotására irányuló erőfeszítések.
Az alapvető kihívás a számítás koherenciaidejének növelése volt.

Az első megvalósítási ötlet a qubitek elrendezését egy 2 dimenziós síkon képzelte el, melynek
sematikus ábrája lent látható. Egy logikai qubit (színes négyzetek) 4 fizikai qubitból áll (pöttyök),
a fizikai qubiteket pedig rezonátorok (fekete vonalak) kötik össze. Egy qubitet egy Josephson-csomópont
valósít meg. Az elrendezés lényege, hogy a Josephson-csomópontok kvantum energiaszintjei meghatározott
harmonikus frekvenciákon oszcillálhatnak, egymással pedig a rezonátorokon keresztül léphetnek kapcsolatba.

![](/assets/img/2021-11-27-az-ibm-quantum-tortenete/2D_skew_square_lattice.webp)

Első qubit topológia: 2D skew square lattice  
(Forrás: [Nature](https://www.nature.com/articles/ncomms5015))

A qubiteken a műveletvégzés mikrohullámú pulzusokkal történik. Annak érdekében, hogy a qubitek
megőrizzék a szupravezetői tulajdonságaikat közel 15mK alá kell őket hűteni egy erre kialakított
speciális hűtőeszközben, továbbá el kell őket zárni a környezeti hatások elől, miközben a külvilággal
történő információcserére továbbra is lehetőséget kell biztosítani.

_Források:_

* [Gallagher, W.J., Harris, E.P. and Ketchen, M.B., 2012, July. Superconductivity at IBM - A centennial review: Part I - Superconducting computer and device applications. In _Proc. IEEE/CSC ESAS Eur. Supercond. News Forum_ (No. 21, pp. 1-34).](https://snf.ieeecsc.org/sites/ieeecsc.org/files/RN28e-1.pdf)
* [Clarke, J., Laibowitz, R. , Gallagher, W., and Theis, T.N., 2007. Obituary of Roger Hilsen Koch](https://physicstoday.scitation.org/do/10.1063/pt.4.2158/full/)
* [DiVincenzo, D.P., 2000. The physical implementation of quantum computation. _Fortschritte der Physik: Progress of Physics_, 48(9‐11), pp.771-783.](https://onlinelibrary.wiley.com/doi/abs/10.1002/1521-3978(200009)48:9/11%3C771::AID-PROP771%3E3.0.CO;2-E)
* [Steffen, M., DiVincenzo, D.P., Chow, J.M., Theis, T.N. and Ketchen, M.B., 2011. Quantum computing: An IBM perspective. _IBM Journal of Research and Development_, 55(5), pp.13-1.](https://ieeexplore.ieee.org/abstract/document/6032777)
* [Chow, J.M., Gambetta, J.M., Magesan, E., Abraham, D.W., Cross, A.W., Johnson, B.R., Masluk, N.A., Ryan, C.A., Smolin, J.A., Srinivasan, S.J. and Steffen, M., 2014. Implementing a strand of a scalable fault-tolerant quantum computing fabric. _Nature communications_, 5(1), pp.1-9.](https://www.nature.com/articles/ncomms5015)

## Kvantumszámítógép a felhőben: az IBM Quantum Experience

2016 előtt még az elméleti kutatók számára is nehezen lehetett kvantumszámítógéphez hozzájutni,
általában egyedi kérésekkel keresték meg többek között az IBM kvantumhardver kutatóit. 2015-ben a
ThinkQ konferencián megkérdezték a közönséget, hogy használnának-e egy kis méretű felhőben elérhető
kvantum processzort az IBM-től, melyre egyöntetű igen volt a válasz. 1 évvel később elindult az
IBM Quantum Experience, az első kvantumprocesszor a felhőben, amely akkor 5 qubites volt.

Azóta egy több alkotóelemből álló felhőszolgáltatássá fejlődött ki, melynek részei a
[Quantum Composer](https://quantum-computing.ibm.com/composer), a [Qiskit](https://qiskit.org/)
és az [OpenQASM](https://qiskit.github.io/openqasm/) nyelv, továbbá az
[IBM Quantum Lab](https://quantum-computing.ibm.com/lab/docs/iql/).

### Quantum Composer

A [Quantum Composer](https://quantum-computing.ibm.com/composer) egy grafikus kvantumprogramozásra
használható eszköz, melyben különböző egyszerű kvantumos áramköröket állíthatunk össze.

![](/assets/img/2021-11-27-az-ibm-quantum-tortenete/ibm_quantum_composer_gif_tour.gif)

Quantum Composer  
(Forrás: [quantum-computing.ibm.com](https://quantum-computing.ibm.com/composer/docs/iqx/))

Az egyes kapuk hatását megfigyelhetjük a mérési valószínűségek alakulásából, illetve a Bloch-gömbön
látható eredményből is. Az elkészült áramkört ezután lefuttathatjuk akár szimulátorokon, akár valódi
kvantum hardveren, továbbá OpenQASM és Python (Qiskit) nyelvű kódot is generálhatunk belőle.

Az első lépések megtételéhez érdemes az IBM weboldalán elérhető
[dokumentációval](https://quantum-computing.ibm.com/composer/docs/iqx/) kezdeni, például
[ebben a tutorialban](https://quantum-computing.ibm.com/composer/docs/iqx/first-circuit)
egy kvantum összefonódás összeállítását lehet kipróbálni.

### Qiskit

A [Qiskit](https://qiskit.org/) egy nyílt forráskódú kvantum SDK, mely a Python 3 nyelvet
támogatja és mely segítségével Python nyelven hozhatunk létre kvantumalgoritmusokat megvalósító
áramköröket, melyeket aztán az IBM felhőjében le is futtathatunk.

A [Qiskit dokumentációja](https://qiskit.org/documentation/getting_started.html) szépen
kidolgozott, nagyon alapos bevezetést nyújt a rendszer használatába, továbbá tartalmazza a
[Qiskit Textbook](https://qiskit.org/textbook/preface.html)\-ot, mely a kvantuminformatika
elmélti háttérbe és különböző kvantumalgoritmusok megvalósításába nyújt kezdők számára bevezetést.
A [Qiskit Youtube csatornáján](https://www.youtube.com/c/qiskit) számtalan érdekes és hasznos
videó található a rendszer használatával kapcsolatban.

### OpenQASM

Az [OpenQASM](https://qiskit.github.io/openqasm/) egy olyan önálló "assembly nyelv", mellyel
a Qiskithez hasonlóan leírhatunk kvantumalgoritmusokat.

### IBM Quantum Lab

Az [IBM Quantum Lab](https://quantum-computing.ibm.com/lab/docs/iql/) egy az IBM felhőjében
hosztolt Jupyter notebook környezet, melyben Pythonban, Qiskit felhasználásával lehet azonnal
kvantumalgoritmusokkal kísérletezni, lokális telepítés szükségessége nélkül.

IBM Quantum Lab  
(Forrás: [quantum-computing.ibm.com](https://quantum-computing.ibm.com/lab) )

_Források:_

* [Five years ago today, we put the first quantum computer on the cloud. Here’s how we did it.](https://research.ibm.com/blog/quantum-five-years)

## Kvantumprocesszorok fejlődése

Az 5 qubites processzorokat gyorsan követték a 17, 27, 53 és 65 qubitesek. Attól függően,
hogy a qubitek között milyen összekötő gráf került kialakításra és azok hány qubit
támogatására képesek, különböző processzorcsaládok léteznek: Canary, Hummingbird és Falcon.
A Hummingbird családdal került bevezetésre az úgynevezett "heavy-hexagonal" topológia,
melyben a négyzetrács helyett hatszög alakban helyezkednek el a qubitek. Ezzel a topológiával
a hibajavítás mértéke növelhető, azonban cserébe egy kicsit csökkent a qubitek közötti
elérhető kapcsolatok száma.

![](/assets/img/2021-11-27-az-ibm-quantum-tortenete/ibm_heavy_hexagonal.webp)

Qubit topológia: heavy-hexagonal  
(Forrás: [IBM Research](https://research.ibm.com/blog/heavy-hex-lattice))

_Források:_

* [IBM Quantum processor types](https://quantum-computing.ibm.com/services/docs/services/manage/systems/processors)
* [The IBM Quantum heavy hex lattice](https://research.ibm.com/blog/heavy-hex-lattice)

A felhő szolgáltatás mellett akinek elég pénze van, meg is vásárolhat egy kvantumszámítógépet
az IBM-től, az [IBM Quantum System One](https://research.ibm.com/interactive/system-one/)\-t.
Az európai neves Fraunhofer intézet a németországi Ehningen-be vásárolt 2021-ben egy ilyen
kvantumszámítógépet, mely az Európai Unió jelen pillanatban legerősebb kvantumszámítógépe és
az első az USA-n kívül eladott IBM Quantum System One. A számítógépet gyógyszerfejlesztésre,
éghajlati modellek javítására, logisztikai rendszerek optimalizációjára, anyagtudománnyal
kapcsolatos szimulációkra, továbbá fiatal kutatók képzésére szeretnék felhasználni.

![](/assets/img/2021-11-27-az-ibm-quantum-tortenete/ibm_quantum_system_one.webp)

IBM Quantum System One  
(Forrás: [IBM Research](https://research.ibm.com/blog/fraunhofer-quantum-system-one))

_Források:_

* [Curtain up: Fraunhofer and IBM to unveil quantum computer](https://www.fraunhofer.de/en/press/research-news/2021/june-2021/fraunhofer-and-ibm-to-unveil-quantum-computer.html)
* [Fraunhofer goes quantum: IBM’s Quantum System One comes to Europe](https://research.ibm.com/blog/fraunhofer-quantum-system-one)

## A jövő

A 2021 novemberében tartott IBM Quantum Summiton kaphattunk információt az IBM kvantum jövőképéről.
A Keynote videó megtekinthető az IBM Research Youtube csatornáján:

Az egyik legérdekesebb bejelentés, hogy átlépték a 100 qubites határt az Eagle processzorral, továbbá
2023-ra 1000 fölötti qubit számot ígérnek.

![](/assets/img/2021-11-27-az-ibm-quantum-tortenete/ibm_quantum_roadmap.webp)

IBM Quantum Development Roadmap  
(Forrás: [IBM Research](https://research.ibm.com/blog/quantum-development-roadmap))
