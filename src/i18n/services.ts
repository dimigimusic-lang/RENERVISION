import type { Lang } from './utils';

type ServiceText = {
  title: string;
  tagline: string;
  description: string;
  howItWorks?: { title: string; description: string }[];
  benefits?: { title: string; description: string }[];
};

export const serviceTranslations: Record<string, Partial<Record<Lang, ServiceText>>> = {
  solar: {
    de: {
      title: 'Solarenergie',
      tagline: 'Die Kraft der Sonne nutzen',
      description: 'Photovoltaik-Technologie wandelt Sonnenlicht direkt in Strom um — sauber, leise und zu rapide sinkenden Kosten. RENERVISION plant und realisiert Solaranlagen von 5-kW-Dachanlagen bis hin zu 100-MW-Freiflächenparks in ganz Europa.',
      howItWorks: [
        {
          title: 'Photovoltaischer Effekt',
          description: 'Solarzellen aus Silizium-Halbleiterschichten absorbieren Photonen des Sonnenlichts. Diese Energie löst Elektronen heraus und erzeugt einen Gleichstromfluss (DC) zwischen den positiven und negativen Schichten jeder Zelle.',
        },
        {
          title: 'Wechselrichter-Umwandlung',
          description: 'Ein hocheffizienter Wechselrichter wandelt den von den Modulen erzeugten Gleichstrom in netzkompatiblen Wechselstrom um. Moderne String- und Mikro-Wechselrichter erreichen Umwandlungswirkungsgrade von über 98 %.',
        },
        {
          title: 'Netzintegration',
          description: 'Überschüssige Energie wird ins Netz eingespeist und durch Einspeisevergütungen oder Gutschriften vergütet. Batteriespeicher können tagsüber erzeugten Strom für die Nacht speichern und so den Eigenverbrauch und die Unabhängigkeit maximieren.',
        },
        {
          title: 'Intelligentes Monitoring',
          description: 'Echtzeit-Dashboards verfolgen Erzeugung, Verbrauch und Einspeisung auf Modulebene. Prädiktive Analytik erkennt leistungsschwache Strings, bevor sie zu nennenswerten Verlusten führen, und sichert so maximale Erträge das ganze Jahr über.',
        },
      ],
      benefits: [
        {
          title: 'Niedrigste Energiekosten',
          description: 'Solar-PV erreichte 2024 weltweit eine LCOE von ca. 28 $/MWh — günstiger als jede andere neu errichtete Stromquelle. Die Betriebskosten liegen nahe null, da Sonnenlicht kostenlos ist.',
        },
        {
          title: 'Skalierbar von kW bis GW',
          description: 'Modulare Paneltechnologie skaliert von einer 5-kW-Dachanlage bis zu 500-MW-Freiflächenparks ohne grundlegende Technologieänderung.',
        },
        {
          title: 'Langlebig und wartungsarm',
          description: 'Qualitätsmodule haben 25-jährige Leistungsgarantien. Keine beweglichen Teile bedeutet minimalen Wartungsaufwand — in der Regel nur eine jährliche Inspektion und Modulreinigung.',
        },
        {
          title: 'Energieunabhängigkeit',
          description: 'Eigenerzeugung vor Ort reduziert die Abhängigkeit von volatilen Netzstrompreisen drastisch. In Kombination mit Speichern wird nahezu vollständige Unabhängigkeit erreicht.',
        },
        {
          title: 'CO₂-freier Betrieb',
          description: 'Null direkte Emissionen im Betrieb. Eine typische 10-kW-Dachanlage kompensiert ca. 6 Tonnen CO₂ pro Jahr — das entspricht dem jährlichen Pflanzen von 280 Bäumen.',
        },
        {
          title: 'Einnahmenerzielung',
          description: 'Einspeisevergütungen, PPAs und EU-Förderprogramme ermöglichen es Solaranlagen, über 20 Jahre hinweg stabile, vertraglich gesicherte Einnahmen zu generieren.',
        },
      ],
    },
    fr: {
      title: 'Énergie solaire',
      tagline: 'Exploiter la puissance du soleil',
      description: 'La technologie photovoltaïque convertit directement la lumière du soleil en électricité — proprement, silencieusement et à un coût en baisse rapide. RENERVISION conçoit et réalise des installations solaires allant de 5 kW en toiture à 100 MW de parcs au sol à travers l\u2019Europe.',
      howItWorks: [
        {
          title: 'Effet photovoltaïque',
          description: 'Les cellules solaires constituées de couches semi-conductrices en silicium absorbent les photons de la lumière solaire. Cette énergie libère des électrons, créant un flux de courant continu (CC) entre les couches positive et négative de chaque cellule.',
        },
        {
          title: 'Conversion par onduleur',
          description: 'Un onduleur à haut rendement convertit le courant continu produit par les panneaux en courant alternatif compatible avec le réseau et vos appareils. Les onduleurs string et micro-onduleurs modernes atteignent des rendements de conversion supérieurs à 98 %.',
        },
        {
          title: 'Intégration au réseau',
          description: 'L\u2019énergie excédentaire est exportée vers le réseau, générant des tarifs de rachat ou des crédits. Les systèmes de stockage par batteries permettent de stocker la production diurne pour une utilisation nocturne, maximisant l\u2019autoconsommation et l\u2019indépendance.',
        },
        {
          title: 'Supervision intelligente',
          description: 'Des tableaux de bord en temps réel suivent la production, la consommation et l\u2019export au niveau de chaque panneau. L\u2019analyse prédictive détecte les strings sous-performants avant qu\u2019ils ne causent des pertes significatives, garantissant un rendement maximal toute l\u2019année.',
        },
      ],
      benefits: [
        {
          title: 'Énergie au coût le plus bas',
          description: 'Le solaire PV a atteint un LCOE mondial d\u2019environ 28 $/MWh en 2024 — moins cher que toute autre source de production neuve. Les coûts d\u2019exploitation sont quasi nuls puisque la lumière du soleil est gratuite.',
        },
        {
          title: 'Évolutif du kW au GW',
          description: 'La technologie modulaire des panneaux s\u2019adapte d\u2019une toiture résidentielle de 5 kW à des parcs au sol de 500 MW sans changement fondamental de technologie.',
        },
        {
          title: 'Longue durée de vie, faible maintenance',
          description: 'Les panneaux de qualité bénéficient de garanties de performance de 25 ans. L\u2019absence de pièces mobiles signifie une maintenance minimale — généralement une inspection annuelle et un nettoyage des panneaux.',
        },
        {
          title: 'Indépendance énergétique',
          description: 'La production sur site réduit considérablement la dépendance aux prix volatils de l\u2019électricité du réseau. Associée au stockage, elle permet d\u2019atteindre une indépendance quasi totale.',
        },
        {
          title: 'Fonctionnement zéro carbone',
          description: 'Zéro émission directe en exploitation. Un système résidentiel typique de 10 kW compense environ 6 tonnes de CO₂ par an — l\u2019équivalent de la plantation de 280 arbres chaque année.',
        },
        {
          title: 'Génération de revenus',
          description: 'Les tarifs de rachat, les PPA et les dispositifs incitatifs européens permettent aux actifs solaires de générer des revenus stables et contractualisés pendant plus de 20 ans.',
        },
      ],
    },
    es: {
      title: 'Energía solar',
      tagline: 'Aprovechando el poder del sol',
      description: 'La tecnología fotovoltaica convierte la luz solar directamente en electricidad, de forma limpia, silenciosa y a un coste en rápido descenso. RENERVISION diseña e instala sistemas solares desde 5 kW en tejados hasta parques de 100 MW en toda Europa.',
      howItWorks: [
        {
          title: 'Efecto fotovoltaico',
          description: 'Las células solares, fabricadas con capas semiconductoras de silicio, absorben fotones de la luz solar. Esta energía libera electrones, creando un flujo de corriente continua (CC) entre las capas positiva y negativa de cada célula.',
        },
        {
          title: 'Conversión mediante inversor',
          description: 'Un inversor de alta eficiencia convierte la electricidad CC generada por los paneles en electricidad CA compatible con la red y sus electrodomésticos. Los inversores de cadena y los microinversores modernos alcanzan eficiencias de conversión superiores al 98 %.',
        },
        {
          title: 'Integración en la red',
          description: 'El excedente de energía se exporta a la red, generando tarifas de alimentación o créditos. Los sistemas de almacenamiento con baterías pueden almacenar la generación diurna para uso nocturno, maximizando el autoconsumo y la independencia.',
        },
        {
          title: 'Monitorización inteligente',
          description: 'Paneles de control en tiempo real rastrean la producción, el consumo y la exportación a nivel de panel. El análisis predictivo detecta cadenas de bajo rendimiento antes de que causen pérdidas significativas, asegurando el máximo rendimiento durante todo el año.',
        },
      ],
      benefits: [
        {
          title: 'Energía de menor coste',
          description: 'La energía solar fotovoltaica alcanzó un LCOE global de aproximadamente 28 $/MWh en 2024, más barata que cualquier otra fuente de nueva construcción. Los costes operativos son prácticamente nulos, ya que la luz solar es gratuita.',
        },
        {
          title: 'Escalable de kW a GW',
          description: 'La tecnología modular de paneles escala desde un tejado residencial de 5 kW hasta granjas solares de 500 MW sin ningún cambio fundamental en la tecnología.',
        },
        {
          title: 'Larga vida útil, bajo mantenimiento',
          description: 'Los paneles de calidad tienen garantías de rendimiento de 25 años. La ausencia de piezas móviles implica un mantenimiento mínimo, normalmente solo una inspección anual y limpieza de paneles.',
        },
        {
          title: 'Independencia energética',
          description: 'La generación in situ reduce drásticamente la dependencia de los volátiles precios de la electricidad de la red. Combínela con almacenamiento para lograr una independencia casi total.',
        },
        {
          title: 'Operación libre de carbono',
          description: 'Cero emisiones directas durante la operación. Un sistema residencial típico de 10 kW compensa unas 6 toneladas de CO₂ al año, equivalente a plantar 280 árboles anualmente.',
        },
        {
          title: 'Generación de ingresos',
          description: 'Las tarifas de exportación, los PPA y los programas de incentivos de la UE permiten que los activos solares generen ingresos consistentes y contractuales durante más de 20 años.',
        },
      ],
    },
    hr: {
      title: 'Sunčeva energija',
      tagline: 'Iskorištavanje snage Sunca',
      description: 'Fotonaponska tehnologija izravno pretvara sunčevu svjetlost u električnu energiju — čisto, tiho i po sve nižoj cijeni. RENERVISION projektira i izvodi solarne instalacije od krovnih sustava od 5 kW do solarnih parkova od 100 MW diljem Europe.',
      howItWorks: [
        {
          title: 'Fotonaponski efekt',
          description: 'Solarne ćelije izrađene od poluvodičkih slojeva silicija apsorbiraju fotone iz sunčeve svjetlosti. Ta energija oslobađa elektrone, stvarajući tok istosmjerne struje (DC) između pozitivnog i negativnog sloja svake ćelije.',
        },
        {
          title: 'Pretvorba inverterom',
          description: 'Visokoefikasni inverter pretvara istosmjernu struju (DC) koju generiraju paneli u izmjeničnu struju (AC) kompatibilnu s mrežom i kućanskim uređajima. Moderni string i mikro inverteri postižu učinkovitost pretvorbe iznad 98 %.',
        },
        {
          title: 'Integracija u mrežu',
          description: 'Višak energije izvozi se u mrežu, ostvarujući poticajne tarife ili kredite. Sustavi skladištenja s baterijama mogu pohraniti dnevnu proizvodnju za noćnu uporabu, maksimizirajući vlastitu potrošnju i neovisnost.',
        },
        {
          title: 'Pametni nadzor',
          description: 'Nadzorne ploče u stvarnom vremenu prate proizvodnju, potrošnju i izvoz na razini pojedinog panela. Prediktivna analitika otkriva nizove slabijeg rada prije nego uzrokuju značajne gubitke, osiguravajući maksimalan prinos tijekom cijele godine.',
        },
      ],
      benefits: [
        {
          title: 'Najjeftinija energija',
          description: 'Solarna fotonaponika dosegla je globalni LCOE od oko 28 USD/MWh u 2024. — jeftinije od bilo kojeg drugog novog izvora energije. Operativni troškovi su gotovo nula jer je sunčeva svjetlost besplatna.',
        },
        {
          title: 'Skalabilnost od kW do GW',
          description: 'Modularna tehnologija panela skalira se od krovnog sustava od 5 kW do solarnih farmi od 500 MW bez ikakve temeljne promjene u tehnologiji.',
        },
        {
          title: 'Dug vijek trajanja, malo održavanje',
          description: 'Kvalitetni paneli imaju jamstva učinkovitosti od 25 godina. Bez pokretnih dijelova znači minimalno održavanje — obično samo godišnji pregled i čišćenje panela.',
        },
        {
          title: 'Energetska neovisnost',
          description: 'Proizvodnja na lokaciji dramatično smanjuje ovisnost o nestabilnim cijenama električne energije iz mreže. Kombinirajte sa skladištenjem za gotovo potpunu neovisnost.',
        },
        {
          title: 'Rad bez emisija ugljika',
          description: 'Nula izravnih emisija tijekom rada. Tipični kućni sustav od 10 kW kompenzira oko 6 tona CO₂ godišnje — što je ekvivalent sadnji 280 stabala na godinu.',
        },
        {
          title: 'Ostvarivanje prihoda',
          description: 'Izvozne tarife, PPA-ovi i poticajni programi EU omogućuju solarnim postrojenjima ostvarivanje stabilnih, ugovorenih prihoda tijekom više od 20 godina.',
        },
      ],
    },
    zh: {
      title: '太阳能',
      tagline: '利用太阳的力量',
      description: '光伏技术将太阳光直接转化为电力——清洁、无声且成本快速下降。RENERVISION设计并实施从5 kW屋顶系统到100 MW地面电站的太阳能项目，覆盖整个欧洲。',
      howItWorks: [
        {
          title: '光伏效应',
          description: '由硅半导体层制成的太阳能电池吸收阳光中的光子。这些能量将电子击出，在每个电池的正负层之间产生直流电（DC）流。',
        },
        {
          title: '逆变器转换',
          description: '高效逆变器将光伏板产生的直流电转换为与电网和用电设备兼容的交流电。现代组串式和微型逆变器的转换效率超过98%。',
        },
        {
          title: '并网集成',
          description: '多余的电能输出到电网，获取上网电价或补贴。储能电池系统可将白天的发电量储存供夜间使用，最大化自发自用率和能源独立性。',
        },
        {
          title: '智能监控',
          description: '实时仪表盘在组件级别跟踪发电量、用电量和输出量。预测性分析在组串性能下降造成重大损失之前即可检测到问题，确保全年最大发电量。',
        },
      ],
      benefits: [
        {
          title: '最低成本能源',
          description: '光伏发电在2024年的全球平准化度电成本（LCOE）约为28美元/MWh——比任何其他新建电源都便宜。由于阳光免费，运营成本接近零。',
        },
        {
          title: '从千瓦到吉瓦的灵活扩展',
          description: '模块化光伏板技术可从5 kW家庭屋顶扩展到500 MW公用事业电站，无需改变基本技术。',
        },
        {
          title: '寿命长、维护少',
          description: '优质光伏板提供25年性能保证。无运动部件意味着维护需求极低——通常只需年度检查和组件清洁。',
        },
        {
          title: '能源独立',
          description: '现场发电大幅降低对波动性电网电价的依赖。搭配储能系统可实现近乎完全的能源独立。',
        },
        {
          title: '零碳运行',
          description: '运行期间零直接排放。典型的10 kW家用系统每年可抵消约6吨二氧化碳——相当于每年种植280棵树。',
        },
        {
          title: '创收能力',
          description: '上网电价、购电协议（PPA）和欧盟激励计划使太阳能资产能够在20年以上的时间内持续产生稳定的合同收入。',
        },
      ],
    },
  },
  wind: {
    de: {
      title: 'Windkraftanlagen',
      tagline: 'Die Energie der bewegten Luft einfangen',
      description: 'Windenergie ist die am schnellsten wachsende Stromquelle der Welt. RENERVISION liefert die komplette Windparkentwicklung — von der Ressourcenbewertung und Genehmigung über den Bau bis zum Netzanschluss und Langzeitbetrieb.',
      howItWorks: [
        {
          title: 'Aerodynamischer Auftrieb',
          description: 'Windturbinenblätter sind präzise geformte Tragflächenprofile. Wenn Wind über sie hinwegstreicht, entsteht ein Druckunterschied, der aerodynamischen Auftrieb erzeugt und den Rotor in Drehung versetzt. Moderne 3-Blatt-Designs maximieren die Effizienz bei gleichzeitiger Minimierung der Ermüdungsbelastung.',
        },
        {
          title: 'Mechanische Übertragung',
          description: 'Die Rotornabe treibt eine Hauptwelle an. Getriebebestückte Turbinen übersetzen die niedrige Drehzahl (~15 U/min) auf ~1.500 U/min für den Generator. Getriebelose Turbinen verzichten durch Permanentmagnet-Generatoren vollständig auf das Getriebe und erhöhen so die Zuverlässigkeit.',
        },
        {
          title: 'Stromerzeugung',
          description: 'Der Generator wandelt Rotationsenergie in dreiphasigen Wechselstrom um. Leistungselektronik und Transformatoren passen die Ausgabe an Netzfrequenz und Spannung an. Die Turbinenleistung wird durch Azimut- und Pitchregelsysteme kontinuierlich optimiert.',
        },
        {
          title: 'Netzanschluss & SCADA',
          description: 'Eine Vor-Ort-Umspannstation sammelt den Strom aller Turbinen und transformiert die Spannung für die Übertragung hoch. SCADA-Systeme bieten rund um die Uhr Fernüberwachung, Fehlererkennung und Leistungsberichterstattung für den gesamten Windpark.',
        },
      ],
      benefits: [
        {
          title: 'Keine Brennstoffkosten',
          description: 'Nach der Errichtung ist die Primärenergiequelle einer Windturbine — der Wind — kostenlos. Das hält die Betriebskosten vorhersehbar niedrig und schützt die Einnahmen vor Brennstoffpreisvolatilität.',
        },
        {
          title: 'Hohe Kapazitätsfaktoren',
          description: 'Offshore-Windstandorte erreichen regelmäßig Kapazitätsfaktoren von 45–55 % und übertreffen damit Solar-PV in nordeuropäischen Breiten deutlich. Erstklassige Onshore-Standorte erreichen 38–42 %.',
        },
        {
          title: 'Geringer Flächenbedarf',
          description: 'Die tatsächliche Flächenbelegung eines Windparks (Fundamentflächen, Wege) beträgt nur 1–2 % der Gesamtfläche. Das Land zwischen den Turbinen wird weiterhin landwirtschaftlich genutzt.',
        },
        {
          title: 'Schnelle Errichtung',
          description: 'Ein 50-MW-Onshore-Windpark kann innerhalb von 12–18 Monaten nach Genehmigungserteilung voll betriebsbereit sein — einer der schnellsten Wege zu neuer Erzeugungskapazität.',
        },
        {
          title: 'Lange Anlagenlebensdauer',
          description: 'Moderne Turbinen sind für eine Lebensdauer von 25 Jahren ausgelegt. Repowering — der Austausch älterer Rotoren durch größere, effizientere Modelle auf bestehenden Fundamenten — verlängert die wirtschaftliche Nutzungsdauer weiter.',
        },
        {
          title: 'Komplementär zu Solar',
          description: 'Wind- und Solarerzeugungsprofile ergänzen sich natürlich: Wind erreicht seine Spitzenwerte typischerweise an Wintermorgen und -abenden, wenn die Solarproduktion gering ist, was ein Hybridportfolio sehr ausgewogen macht.',
        },
      ],
    },
    fr: {
      title: 'Éoliennes',
      tagline: 'Capter l\u2019énergie du vent',
      description: 'L\u2019énergie éolienne est la source d\u2019électricité à la croissance la plus rapide au monde. RENERVISION assure le développement complet de parcs éoliens — de l\u2019évaluation des ressources et des autorisations jusqu\u2019à la construction, le raccordement au réseau et l\u2019exploitation à long terme.',
      howItWorks: [
        {
          title: 'Portance aérodynamique',
          description: 'Les pales d\u2019éolienne sont des profils aérodynamiques façonnés avec précision. Lorsque le vent passe sur elles, une différence de pression crée une portance aérodynamique qui fait tourner le rotor. Les conceptions modernes à 3 pales maximisent l\u2019efficacité tout en minimisant les charges de fatigue.',
        },
        {
          title: 'Transmission mécanique',
          description: 'Le moyeu du rotor entraîne un arbre principal. Les éoliennes à multiplicateur augmentent la faible vitesse de rotation (~15 tr/min) à ~1 500 tr/min pour la génératrice. Les éoliennes à entraînement direct suppriment le multiplicateur grâce à des génératrices à aimants permanents, améliorant la fiabilité.',
        },
        {
          title: 'Production d\u2019électricité',
          description: 'La génératrice convertit l\u2019énergie de rotation en courant alternatif triphasé. L\u2019électronique de puissance et les transformateurs adaptent la sortie à la fréquence et à la tension du réseau. La puissance de l\u2019éolienne est continuellement optimisée par les systèmes de contrôle en lacet et en pas.',
        },
        {
          title: 'Raccordement réseau & SCADA',
          description: 'Un poste de transformation sur site collecte la production de toutes les éoliennes et élève la tension pour le transport. Les systèmes SCADA assurent une surveillance à distance 24h/24, la détection de pannes et le reporting de performance sur l\u2019ensemble du parc.',
        },
      ],
      benefits: [
        {
          title: 'Aucun coût de combustible',
          description: 'Une fois construite, la source d\u2019énergie primaire d\u2019une éolienne — le vent — est gratuite. Cela maintient les coûts d\u2019exploitation à un niveau prévisiblement bas et protège les revenus de la volatilité des prix des combustibles.',
        },
        {
          title: 'Facteurs de capacité élevés',
          description: 'Les sites éoliens en mer atteignent régulièrement des facteurs de capacité de 45 à 55 %, dépassant largement le solaire PV aux latitudes d\u2019Europe du Nord. Les meilleurs sites terrestres atteignent 38 à 42 %.',
        },
        {
          title: 'Faible emprise au sol',
          description: 'L\u2019occupation réelle au sol d\u2019un parc éolien (socles des éoliennes, voies d\u2019accès) ne représente que 1 à 2 % de la surface totale. Les terres entre les éoliennes conservent leur usage agricole normal.',
        },
        {
          title: 'Construction rapide',
          description: 'Un parc éolien terrestre de 50 MW peut être pleinement opérationnel dans les 12 à 18 mois suivant l\u2019obtention du permis — l\u2019une des voies les plus rapides vers de nouvelles capacités de production.',
        },
        {
          title: 'Longue durée de vie des actifs',
          description: 'Les éoliennes modernes sont conçues pour une durée de service de 25 ans. Le repowering — le remplacement des rotors vieillissants par des modèles plus grands et plus efficaces sur les fondations existantes — prolonge encore la durée de vie économique.',
        },
        {
          title: 'Complémentaire au solaire',
          description: 'Les profils de production éolien et solaire sont naturellement complémentaires : le vent culmine en hiver, le matin et le soir, lorsque le solaire est faible, ce qui rend un portefeuille hybride très régulier.',
        },
      ],
    },
    es: {
      title: 'Turbinas eólicas',
      tagline: 'Capturando la energía del viento',
      description: 'La energía eólica es la fuente de electricidad de mayor crecimiento en el mundo. RENERVISION ofrece el desarrollo completo de parques eólicos — desde la evaluación de recursos y la obtención de permisos hasta la construcción, la conexión a la red y la operación a largo plazo.',
      howItWorks: [
        {
          title: 'Sustentación aerodinámica',
          description: 'Las palas de las turbinas eólicas son perfiles aerodinámicos de precisión. Al pasar el viento sobre ellas, se crea una diferencia de presión que genera sustentación aerodinámica, haciendo girar el rotor. Los diseños modernos de 3 palas maximizan la eficiencia y minimizan las cargas de fatiga.',
        },
        {
          title: 'Transmisión mecánica',
          description: 'El buje del rotor hace girar un eje principal. Las turbinas con multiplicadora aumentan la baja velocidad de rotación (~15 RPM) a ~1500 RPM para el generador. Las turbinas de accionamiento directo eliminan la multiplicadora usando generadores de imanes permanentes, mejorando la fiabilidad.',
        },
        {
          title: 'Generación de electricidad',
          description: 'El generador convierte la energía rotacional en electricidad CA trifásica. La electrónica de potencia y los transformadores acondicionan la salida para coincidir con la frecuencia y el voltaje de la red. La producción de la turbina se optimiza continuamente mediante sistemas de orientación y paso de pala.',
        },
        {
          title: 'Conexión a la red y SCADA',
          description: 'Una subestación en el emplazamiento recoge la producción de todas las turbinas y eleva el voltaje para la transmisión. Los sistemas SCADA proporcionan monitorización remota 24/7, detección de fallos e informes de rendimiento de toda la flota.',
        },
      ],
      benefits: [
        {
          title: 'Sin costes de combustible',
          description: 'Una vez construida, la fuente de energía primaria de una turbina eólica — el viento — es gratuita. Esto hace que los costes operativos sean previsiblemente bajos y protege los ingresos de la volatilidad del precio de los combustibles.',
        },
        {
          title: 'Altos factores de capacidad',
          description: 'Los emplazamientos eólicos marinos alcanzan habitualmente factores de capacidad del 45–55 %, muy superiores a la solar fotovoltaica en latitudes del norte de Europa. Los mejores emplazamientos terrestres alcanzan el 38–42 %.',
        },
        {
          title: 'Pequeña huella territorial',
          description: 'La ocupación real de superficie de un parque eólico (bases de turbinas, caminos) es solo el 1–2 % del área total. El terreno entre turbinas continúa su uso agrícola normal.',
        },
        {
          title: 'Construcción rápida',
          description: 'Un parque eólico terrestre de 50 MW puede estar plenamente operativo en 12–18 meses desde la concesión del permiso, una de las vías más rápidas hacia nueva capacidad de generación.',
        },
        {
          title: 'Larga vida útil del activo',
          description: 'Las turbinas modernas están diseñadas para una vida útil de 25 años. La repotenciación — sustitución de rotores antiguos por modelos más grandes y eficientes sobre cimentaciones existentes — extiende aún más la vida viable.',
        },
        {
          title: 'Complementaria a la solar',
          description: 'Los perfiles de generación eólica y solar son naturalmente complementarios: el viento tiende a ser máximo en mañanas y tardes de invierno, cuando la solar es baja, haciendo que una cartera híbrida sea muy consistente.',
        },
      ],
    },
    hr: {
      title: 'Vjetroturbine',
      tagline: 'Hvatanje energije pokretnog zraka',
      description: 'Energija vjetra najbrže je rastući izvor električne energije na svijetu. RENERVISION pruža cjelovit razvoj vjetroelektrana — od procjene resursa i ishođenja dozvola do izgradnje, priključenja na mrežu i dugoročnog pogona.',
      howItWorks: [
        {
          title: 'Aerodinamički uzgon',
          description: 'Lopatice vjetroturbina precizno su oblikovani aerodinamički profili. Kada vjetar prolazi preko njih, stvara se razlika tlaka koja generira aerodinamički uzgon i pokreće rotor. Moderni dizajn s 3 lopatice maksimizira učinkovitost uz minimiziranje zamora materijala.',
        },
        {
          title: 'Mehanički prijenos',
          description: 'Glavčina rotora pokreće glavni vratilo. Turbine s mjenjačem povećavaju nisku brzinu vrtnje (~15 o/min) na ~1500 o/min za generator. Turbine s izravnim pogonom eliminiraju mjenjač koristeći generatore s trajnim magnetima, čime se poboljšava pouzdanost.',
        },
        {
          title: 'Proizvodnja električne energije',
          description: 'Generator pretvara energiju vrtnje u trofaznu izmjeničnu struju. Energetska elektronika i transformatori prilagođavaju izlaz frekvenciji i naponu mreže. Proizvodnja turbine kontinuirano se optimizira sustavima zakretanja i regulacije kuta lopatica.',
        },
        {
          title: 'Priključenje na mrežu i SCADA',
          description: 'Trafostanica na lokaciji prikuplja proizvodnju svih turbina i podiže napon za prijenos. SCADA sustavi osiguravaju daljinski nadzor 24/7, detekciju kvarova i izvještavanje o performansama cijele flote.',
        },
      ],
      benefits: [
        {
          title: 'Bez troškova goriva',
          description: 'Jednom izgrađena, primarni izvor energije vjetroturbine — vjetar — je besplatan. To čini operativne troškove predvidljivo niskima i štiti prihode od volatilnosti cijena goriva.',
        },
        {
          title: 'Visoki faktori kapaciteta',
          description: 'Pučinske lokacije za vjetroelektrane redovito postižu faktore kapaciteta od 45–55 %, daleko nadmašujući solarnu fotonaponiku na sjevernoeuropskim širinama. Vrhunske kopnene lokacije dostižu 38–42 %.',
        },
        {
          title: 'Mali prostorni otisak',
          description: 'Stvarna zauzeta površina vjetroelektrane (temelji turbina, putovi) iznosi samo 1–2 % ukupne površine. Zemljište između turbina nastavlja se normalno koristiti za poljoprivredu.',
        },
        {
          title: 'Brza izgradnja',
          description: 'Kopnena vjetroelektrana od 50 MW može biti u potpunosti operativna unutar 12–18 mjeseci od dobivanja dozvole — jedna od najbržih mogućnosti za nove proizvodne kapacitete.',
        },
        {
          title: 'Dug vijek trajanja postrojenja',
          description: 'Moderne turbine projektirane su za životni vijek od 25 godina. Repowering — zamjena starih rotora većim, učinkovitijim modelima na postojećim temeljima — dodatno produžuje iskoristivi vijek.',
        },
        {
          title: 'Komplementarnost sa solarnom energijom',
          description: 'Profili proizvodnje vjetra i sunca prirodno su komplementarni: vjetar je obično najjači zimskim jutrima i večerima kada je solarna proizvodnja niska, čineći hibridni portfelj vrlo ujednačenim.',
        },
      ],
    },
    zh: {
      title: '风力发电',
      tagline: '捕获流动空气的能量',
      description: '风能是全球增长最快的电力来源。RENERVISION提供完整的风电场开发服务——从资源评估、许可审批到建设、并网和长期运营。',
      howItWorks: [
        {
          title: '气动升力',
          description: '风力涡轮机叶片是精密设计的翼型结构。当风流过叶片时，产生压力差形成气动升力，使转子旋转。现代三叶片设计在最大化效率的同时最小化疲劳载荷。',
        },
        {
          title: '机械传动',
          description: '转子轮毂驱动主轴旋转。带齿轮箱的风力涡轮机将低转速（约15转/分钟）提升至约1,500转/分钟以驱动发电机。直驱型涡轮机使用永磁发电机完全取消齿轮箱，提高了可靠性。',
        },
        {
          title: '电力输出',
          description: '发电机将旋转能量转换为三相交流电。电力电子设备和变压器调节输出以匹配电网频率和电压。偏航和变桨控制系统持续优化涡轮机的输出功率。',
        },
        {
          title: '电网接入与SCADA系统',
          description: '现场升压变电站汇集所有涡轮机的输出并升压至输电电压。SCADA系统提供全天候远程监控、故障检测和整个风场的性能报告。',
        },
      ],
      benefits: [
        {
          title: '零燃料成本',
          description: '风力涡轮机建成后，其主要能源——风——是免费的。这使得运营成本可预测且低廉，并保护收益免受燃料价格波动的影响。',
        },
        {
          title: '高容量因子',
          description: '海上风电场常规达到45-55%的容量因子，在北欧纬度地区远超光伏。优质陆上风场可达38-42%。',
        },
        {
          title: '占地面积小',
          description: '风电场的实际占地面积（涡轮机基座、道路）仅为总面积的1-2%。涡轮机之间的土地可继续正常农业使用。',
        },
        {
          title: '建设速度快',
          description: '一座50 MW陆上风电场从获得许可到完全投运仅需12-18个月——是获取新发电容量最快的途径之一。',
        },
        {
          title: '资产寿命长',
          description: '现代涡轮机设计使用寿命为25年。通过更换老旧转子为更大、更高效的型号（重新供电），可在现有基础上进一步延长使用年限。',
        },
        {
          title: '与太阳能互补',
          description: '风能和太阳能的发电曲线天然互补：风力发电在冬季早晚高峰时段最强，恰好弥补太阳能的不足，使混合投资组合具有高度一致性。',
        },
      ],
    },
  },
  hydro: {
    de: {
      title: 'Wasserkraft',
      tagline: 'Die zuverlässigste erneuerbare Energiequelle der Welt',
      description: 'Wasserkraft wandelt die Energie fließenden Wassers mit unerreichter Effizienz in Strom um. Von Laufwasserkraftwerken bis zu großen Staudammprojekten liefert RENERVISION Wasserkraftlösungen, die regelbare, grundlastfähige erneuerbare Energie bereitstellen.',
      howItWorks: [
        {
          title: 'Fallhöhe und Durchfluss',
          description: 'Wasserkraft nutzt die potenzielle Energie von Wasser in erhöhter Lage. Die verfügbare Leistung ist proportional sowohl zur Durchflussmenge (m³/s) als auch zur Fallhöhe — dem vertikalen Höhenunterschied zwischen Einlauf und Turbine. Eine größere Fallhöhe ermöglicht kleinere Turbinen bei gleicher Leistung.',
        },
        {
          title: 'Turbinentypen',
          description: 'Pelton-Turbinen eignen sich für Standorte mit großer Fallhöhe (>200 m) und geringem Durchfluss; Francis-Turbinen sind vielseitig bei mittlerer Fallhöhe (20–700 m); Kaplan-Turbinen bewältigen Laufwasserstandorte mit geringer Fallhöhe und hohem Durchfluss. Jede wandelt kinetische Energie und Druckenergie des Wassers mit 88–93 % Wirkungsgrad in Wellendrehung um.',
        },
        {
          title: 'Generator und Transformator',
          description: 'Die Turbine treibt einen Synchrongenerator an, der dreiphasigen Wechselstrom erzeugt. Große Wasserkraftgeneratoren erreichen Wirkungsgrade über 97 %. Die Ausgangsspannung wird durch einen Transformator auf Übertragungsspannung hochtransformiert.',
        },
        {
          title: 'Lastfolgebetrieb und Speicherung',
          description: 'Anders als Solar- oder Windkraft lässt sich die Wasserkraftleistung durch Anpassung der Schützenöffnungen präzise steuern. Pumpspeicherkraftwerke gehen noch weiter — sie pumpen Wasser in Schwachlastzeiten bergauf und lassen es in Spitzenzeiten ab, wie eine riesige wiederaufladbare Batterie.',
        },
      ],
      benefits: [
        {
          title: 'Höchster Wirkungsgrad',
          description: 'Wasserturbinen wandeln 88–93 % der verfügbaren Wasserenergie in Strom um — der höchste Wirkungsgrad aller kommerziellen Stromerzeugungstechnologien, mehr als doppelt so hoch wie bei Kohle- oder Gaskraftwerken.',
        },
        {
          title: 'Vollständig regelbar',
          description: 'Anders als Wind und Solar kann die Wasserkraftleistung innerhalb von Sekunden hoch- oder heruntergefahren werden. Das macht sie unverzichtbar für die Netzstabilisierung und das Spitzenlastmanagement.',
        },
        {
          title: 'Jahrhundertlange Anlagenlebensdauer',
          description: 'Die Stahlbetonbauwerke eines Wasserkraftwerks halten routinemäßig über 100 Jahre. Viele europäische Wasserkraftwerke aus den 1920er-Jahren erzeugen nach Turbinenmodernisierungen noch heute Strom.',
        },
        {
          title: 'Minimale Betriebskosten',
          description: 'Ein einmal errichtetes Laufwasserkraftwerk hat extrem niedrige Grenzkosten. Kein Brennstoff, minimaler Wartungsbedarf. Der Erlös pro MWh gehört zu den berechenbarsten aller Technologien.',
        },
        {
          title: 'Netzstabilitätsdienste',
          description: 'Wasserkraftwerke liefern Trägheit, Blindleistungsunterstützung und schnelle Frequenzregelung, die für einen stabilen Netzbetrieb unerlässlich sind — Dienstleistungen, die mit der Dekarbonisierung der Netze zunehmend Premiumvergütungen erzielen.',
        },
        {
          title: 'Vielfacher Wassernutzen',
          description: 'Wasserkraftspeicher bieten Hochwasserschutz, Bewässerung, Trinkwasserspeicherung und Erholungsnutzen — gesellschaftliche Vorteile, die weit über die Stromerzeugung hinausgehen.',
        },
      ],
    },
    fr: {
      title: 'Hydroélectricité',
      tagline: 'L\u2019énergie renouvelable la plus fiable au monde',
      description: 'L\u2019hydroélectricité convertit l\u2019énergie de l\u2019eau en mouvement en électricité avec une efficacité inégalée. Des installations au fil de l\u2019eau aux grands barrages, RENERVISION fournit des solutions hydroélectriques offrant une électricité renouvelable pilotable et de base.',
      howItWorks: [
        {
          title: 'Hauteur de chute et débit',
          description: 'L\u2019hydroélectricité exploite l\u2019énergie potentielle de l\u2019eau en altitude. La puissance disponible est proportionnelle à la fois au débit (m³/s) et à la hauteur de chute — la différence de niveau verticale entre la prise d\u2019eau et la turbine. Une hauteur de chute plus élevée permet des turbines plus petites pour une même puissance.',
        },
        {
          title: 'Types de turbines',
          description: 'Les turbines Pelton conviennent aux sites à haute chute (>200 m) et faible débit ; les turbines Francis sont polyvalentes pour les chutes moyennes (20–700 m) ; les turbines Kaplan sont adaptées aux sites au fil de l\u2019eau à faible chute et fort débit. Chacune convertit l\u2019énergie cinétique et la pression de l\u2019eau en rotation avec un rendement de 88 à 93 %.',
        },
        {
          title: 'Générateur et transformateur',
          description: 'La turbine entraîne un alternateur synchrone produisant du courant alternatif triphasé. Les grands alternateurs hydrauliques atteignent des rendements supérieurs à 97 %. La tension de sortie est élevée par un transformateur au niveau de transport pour l\u2019injection sur le réseau.',
        },
        {
          title: 'Pilotage et stockage',
          description: 'Contrairement au solaire ou à l\u2019éolien, la puissance hydroélectrique peut être ajustée avec précision en réglant l\u2019ouverture des vannes. Les stations de transfert d\u2019énergie par pompage (STEP) vont plus loin — pompant l\u2019eau en amont en période creuse et la turbinant en pointe, fonctionnant comme une gigantesque batterie rechargeable.',
        },
      ],
      benefits: [
        {
          title: 'Rendement le plus élevé',
          description: 'Les turbines hydrauliques convertissent 88 à 93 % de l\u2019énergie disponible de l\u2019eau en électricité — le rendement le plus élevé de toutes les technologies de production commerciale, plus du double des centrales à charbon ou à gaz.',
        },
        {
          title: 'Entièrement pilotable',
          description: 'Contrairement à l\u2019éolien et au solaire, la production hydraulique peut être augmentée ou réduite en quelques secondes. Cela en fait un outil inestimable pour l\u2019équilibrage du réseau et la gestion des pointes de demande.',
        },
        {
          title: 'Durée de vie centenaire',
          description: 'Les ouvrages en béton d\u2019un barrage hydroélectrique durent couramment plus de 100 ans. De nombreuses centrales européennes construites dans les années 1920 produisent encore de l\u2019électricité aujourd\u2019hui après modernisation des turbines.',
        },
        {
          title: 'Coûts d\u2019exploitation minimaux',
          description: 'Une fois construite, une centrale au fil de l\u2019eau a des coûts marginaux extrêmement bas. Pas de combustible, maintenance minimale. Le revenu par MWh est parmi les plus prévisibles de toutes les technologies.',
        },
        {
          title: 'Services de stabilité du réseau',
          description: 'Les centrales hydroélectriques fournissent de l\u2019inertie, du soutien en puissance réactive et une réponse rapide en fréquence, essentiels à la stabilité du réseau — des services qui bénéficient de paiements premium à mesure que les réseaux se décarbonent.',
        },
        {
          title: 'Usages multiples de l\u2019eau',
          description: 'Les réservoirs hydroélectriques assurent la protection contre les crues, l\u2019irrigation, le stockage d\u2019eau potable et les activités récréatives — des bénéfices communautaires qui vont bien au-delà de la production d\u2019électricité.',
        },
      ],
    },
    es: {
      title: 'Hidroeléctrica',
      tagline: 'La fuente renovable más fiable del mundo',
      description: 'La energía hidroeléctrica convierte la energía del agua en movimiento en electricidad con una eficiencia inigualable. Desde instalaciones fluyentes hasta grandes proyectos de presas, RENERVISION ofrece soluciones hidroeléctricas que proporcionan electricidad renovable de base y despacho flexible.',
      howItWorks: [
        {
          title: 'Altura y caudal',
          description: 'La energía hidráulica aprovecha la energía potencial del agua en altura. La potencia disponible es proporcional tanto al caudal (m³/s) como a la altura — la diferencia vertical entre la toma y la turbina. Una mayor altura permite turbinas más pequeñas para la misma producción.',
        },
        {
          title: 'Tipos de turbinas',
          description: 'Las turbinas Pelton son adecuadas para alta caída (>200 m) y bajo caudal; las turbinas Francis son versátiles en caída media (20–700 m); las turbinas Kaplan manejan baja caída y alto caudal en instalaciones fluyentes. Cada tipo convierte la energía cinética y de presión del agua en rotación del eje con una eficiencia del 88–93 %.',
        },
        {
          title: 'Generador y transformador',
          description: 'La turbina acciona un generador síncrono que produce energía CA trifásica. Los grandes generadores hidráulicos alcanzan eficiencias superiores al 97 %. La producción se eleva mediante un transformador al voltaje de transmisión para la exportación a la red.',
        },
        {
          title: 'Despacho y almacenamiento',
          description: 'A diferencia de la solar o la eólica, la producción hidroeléctrica puede controlarse con precisión ajustando la apertura de las compuertas. El bombeo hidráulico va más allá: bombea agua cuesta arriba durante períodos de baja demanda y la libera en las puntas, actuando como una batería recargable gigante.',
        },
      ],
      benefits: [
        {
          title: 'Máxima eficiencia',
          description: 'Las turbinas hidroeléctricas convierten el 88–93 % de la energía disponible del agua en electricidad — la mayor eficiencia de cualquier tecnología comercial de generación, más del doble que las centrales de carbón o gas.',
        },
        {
          title: 'Totalmente despachable',
          description: 'A diferencia de la eólica y la solar, la producción hidráulica puede aumentarse o reducirse en segundos. Esto la hace invaluable para el equilibrio de la red y la gestión de la demanda punta.',
        },
        {
          title: 'Vida útil centenaria',
          description: 'Las obras civiles de hormigón de una presa hidráulica duran habitualmente más de 100 años. Muchas centrales hidráulicas europeas construidas en los años 1920 siguen generando electricidad hoy tras la modernización de sus turbinas.',
        },
        {
          title: 'Costes operativos mínimos',
          description: 'Una vez construida, una central fluyente tiene costes marginales extremadamente bajos. Sin combustible, mantenimiento mínimo. Los ingresos por MWh son de los más predecibles de cualquier tecnología.',
        },
        {
          title: 'Servicios de estabilidad de red',
          description: 'Las centrales hidráulicas proporcionan inercia, soporte de potencia reactiva y respuesta rápida de frecuencia esenciales para la operación estable de la red — servicios que generan pagos premium a medida que las redes se descarbonizan.',
        },
        {
          title: 'Múltiples beneficios hídricos',
          description: 'Los embalses hidráulicos proporcionan control de inundaciones, suministro de riego, almacenamiento de agua potable e instalaciones recreativas — beneficios comunitarios que van mucho más allá de la generación eléctrica.',
        },
      ],
    },
    hr: {
      title: 'Hidroelektrane',
      tagline: 'Najpouzdanija obnovljiva energija na svijetu',
      description: 'Hidroelektrična energija pretvara energiju tekuće vode u električnu energiju s nenadmašnom učinkovitošću. Od protočnih elektrana do velikih brana, RENERVISION isporučuje hidroenergetska rješenja koja pružaju upravljivo, bazno obnovljivo napajanje.',
      howItWorks: [
        {
          title: 'Visina pada i protok',
          description: 'Hidroenergija iskorištava potencijalnu energiju vode na visini. Raspoloživa snaga proporcionalna je protoku (m³/s) i visini pada — vertikalnoj razlici između zahvata i turbine. Veća visina pada omogućuje manje turbine za istu proizvodnju.',
        },
        {
          title: 'Tipovi turbina',
          description: 'Peltonove turbine pogodne su za velike padove (>200 m) i male protoke; Francisove turbine su svestrane za srednje padove (20–700 m); Kaplanove turbine obrađuju male padove i velike protoke u protočnim elektranama. Svaka pretvara kinetičku i tlačnu energiju vode u rotaciju vratila s učinkovitošću od 88–93 %.',
        },
        {
          title: 'Generator i transformator',
          description: 'Turbina pokreće sinkroni generator koji proizvodi trofaznu izmjeničnu struju. Veliki hidrogeneratori postižu učinkovitost iznad 97 %. Proizvodnja se transformatorom podiže na prijenosni napon za izvoz u mrežu.',
        },
        {
          title: 'Dispečiranje i skladištenje',
          description: 'Za razliku od solarne ili vjetroenergetike, proizvodnja hidroelektrane može se precizno kontrolirati podešavanjem otvora zasuna. Reverzibilne hidroelektrane idu korak dalje — crpe vodu uzbrdo tijekom niske potražnje i otpuštaju je u vršnim satima, djelujući kao divovska punjiva baterija.',
        },
      ],
      benefits: [
        {
          title: 'Najveća učinkovitost',
          description: 'Hidroelektrične turbine pretvaraju 88–93 % raspoložive energije vode u električnu energiju — najveća učinkovitost od svih komercijalnih tehnologija za proizvodnju energije, više nego dvostruko u odnosu na termoelektrane na ugljen ili plin.',
        },
        {
          title: 'Potpuno upravljiva',
          description: 'Za razliku od vjetra i sunca, hidroelektrična proizvodnja može se povećati ili smanjiti u sekundama. To je čini nezamjenjivom za balansiranje mreže i upravljanje vršnom potražnjom.',
        },
        {
          title: 'Stoljetni vijek trajanja',
          description: 'Betonski građevinski radovi hidroelektrične brane redovito traju više od 100 godina. Mnoge europske hidroelektrane izgrađene 1920-ih i danas proizvode struju nakon modernizacije turbina.',
        },
        {
          title: 'Minimalni operativni troškovi',
          description: 'Jednom izgrađena, protočna elektrana ima iznimno niske marginalne troškove. Bez goriva, minimalno održavanje. Prihod po MWh među najpredvidljivijima od svih tehnologija.',
        },
        {
          title: 'Usluge stabilnosti mreže',
          description: 'Hidroelektrane pružaju inerciju, podršku reaktivne snage i brzi frekvencijski odziv koji su ključni za stabilan rad mreže — usluge za koje se plaćaju premijske naknade kako se mreže dekarboniziraju.',
        },
        {
          title: 'Višestruke vodne koristi',
          description: 'Akumulacijska jezera osiguravaju zaštitu od poplava, navodnjavanje, skladištenje pitke vode i rekreacijske sadržaje — koristi za zajednicu koje nadilaze puku proizvodnju električne energije.',
        },
      ],
    },
    zh: {
      title: '水力发电',
      tagline: '全球最可靠的可再生能源',
      description: '水力发电以无与伦比的效率将流动水的能量转化为电力。从径流式电站到大型大坝项目，RENERVISION提供可调度、基荷运行的可再生水电解决方案。',
      howItWorks: [
        {
          title: '水头与流量',
          description: '水力发电利用高处水体的势能。可用功率与流量（m³/s）和水头——进水口与水轮机之间的垂直高度差——成正比。水头越高，同等出力所需的水轮机越小。',
        },
        {
          title: '水轮机类型',
          description: '冲击式（Pelton）水轮机适用于高水头（>200米）低流量的场址；混流式（Francis）水轮机适用于中等水头（20-700米）；轴流式（Kaplan）水轮机适用于低水头、大流量的径流式电站。每种类型以88-93%的效率将水的动能和压力能转化为轴旋转。',
        },
        {
          title: '发电机与变压器',
          description: '水轮机驱动同步发电机产生三相交流电。大型水力发电机的效率超过97%。变压器将输出电压升至输电电压以并入电网。',
        },
        {
          title: '调度与储能',
          description: '与太阳能或风能不同，水力发电可通过调节闸门开度精确控制输出。抽水蓄能更进一步——在低需求时段将水抽至高处，在用电高峰时放水发电，相当于一个巨型可充电电池。',
        },
      ],
      benefits: [
        {
          title: '最高转换效率',
          description: '水力发电涡轮机将88-93%的可用水能转化为电力——是所有商业发电技术中效率最高的，超过煤电或燃气发电厂的两倍以上。',
        },
        {
          title: '完全可调度',
          description: '与风能和太阳能不同，水电出力可在数秒内调升或调降。这使其在电网平衡和高峰需求管理中具有不可替代的价值。',
        },
        {
          title: '百年级资产寿命',
          description: '水电大坝的混凝土土建工程通常可使用100年以上。许多建于1920年代的欧洲水电站在更换水轮机后至今仍在发电。',
        },
        {
          title: '极低运营成本',
          description: '径流式电站建成后，边际成本极低。无需燃料，维护需求最少。每兆瓦时的收入是所有技术中最可预测的之一。',
        },
        {
          title: '电网稳定服务',
          description: '水电站提供惯性支撑、无功功率补偿和快速频率响应，这些对电网稳定运行至关重要——随着电网脱碳进程推进，这些服务可获得溢价收益。',
        },
        {
          title: '多重水资源效益',
          description: '水电水库同时提供防洪、灌溉供水、饮用水储存和休闲功能——这些社区效益远超发电本身。',
        },
      ],
    },
  },
  geothermal: {
    de: {
      title: 'Geothermie',
      tagline: 'Grundlastenergie aus dem Erdkern',
      description: 'Geothermie nutzt die innere Wärme der Erde — eine praktisch unerschöpfliche Ressource, verfügbar 24 Stunden am Tag, 365 Tage im Jahr. RENERVISION entwickelt Geothermieprojekte sowohl zur Stromerzeugung als auch für direkte Wärmeanwendungen in geologisch aktiven europäischen Regionen.',
      howItWorks: [
        {
          title: 'Ressourcenbewertung',
          description: 'Das geothermische Potenzial wird durch seismische Untersuchungen, Gravitationsstudien und Temperaturgradienten-Analysen kartiert. Hochenthalpie-Ressourcen (>150 °C), die für die Stromerzeugung geeignet sind, treten in vulkanisch aktiven Zonen auf; Niederenthalpie-Ressourcen (30–150 °C) für Fernwärme finden sich in weiten Teilen Europas.',
        },
        {
          title: 'Bohrtechnik',
          description: 'Förderbohrungen werden bis in Tiefen von 1–5 km niedergebracht, um das geothermische Reservoir zu erreichen. Richtungsbohrverfahren ermöglichen mehrere Bohrungen von einem einzigen Bohrplatz aus und minimieren so die Oberflächenbeanspruchung. Injektionsbohrungen führen das abgekühlte Wasser dem Reservoir wieder zu und sichern die Nachhaltigkeit.',
        },
        {
          title: 'Energieumwandlung',
          description: 'Hochtemperaturdampf (Trockendampf- oder Flash-Anlagen) treibt Turbinen direkt an. Bei niedrigeren Temperaturen (70–150 °C) verwenden Binärzyklus-Anlagen ein Arbeitsmedium mit niedrigerem Siedepunkt (z. B. Isopentan) in einem geschlossenen Sekundärkreislauf — ohne Dampfemission in die Atmosphäre.',
        },
        {
          title: 'Direkte Wärmenutzung',
          description: 'Geothermale Fluide bei 30–90 °C eignen sich ideal für Fernwärmenetze, Gewächshauslandwirtschaft, Aquakultur und industrielle Prozesse. Kaskadensysteme nutzen dasselbe Bohrlochfluid nacheinander zur Stromerzeugung, Raumheizung und Prozesswärme und maximieren so die Effizienz.',
        },
      ],
      benefits: [
        {
          title: 'Kontinuierliche Grundlastleistung',
          description: 'Geothermiekraftwerke laufen mit Kapazitätsfaktoren von 90–95 % — zuverlässiger als jede andere erneuerbare Energiequelle. Anders als Solar und Wind ist die Leistung unabhängig von Wetter, Jahreszeit oder Tageszeit.',
        },
        {
          title: 'Minimaler Flächenbedarf',
          description: 'Ein 100-MW-Geothermiekraftwerk beansprucht etwa 1 km² einschließlich aller Bohrungen und Infrastruktur — ungefähr ein Fünfundzwanzigstel der für einen vergleichbaren Solarpark benötigten Fläche.',
        },
        {
          title: 'Sehr niedrige Emissionen',
          description: 'Moderne Binärzyklus-Anlagen sind geschlossene Kreislaufsysteme mit nahezu null atmosphärischen Emissionen. Das CO₂-Äquivalent über den Lebenszyklus beträgt 15–55 g/kWh — eine der saubersten verfügbaren Stromquellen.',
        },
        {
          title: 'Stabile, vorhersehbare Kosten',
          description: 'Nach der Bohrung (dem Hauptinvestitionsaufwand) hat die geothermische Stromerzeugung sehr niedrige und vorhersehbare Betriebskosten, was sie zu einer ausgezeichneten Grundlastergänzung für variable erneuerbare Energien macht.',
        },
        {
          title: 'Doppelte Einnahmequellen',
          description: 'Wo neben Strommärkten auch Wärmemärkte existieren, erwirtschaften kaskadierte Geothermiesysteme gleichzeitig Einnahmen aus beiden — was die Projektökonomie erheblich verbessert.',
        },
        {
          title: 'Lokale Energiesicherheit',
          description: 'Geothermische Ressourcen sind einheimisch — sie können weder durch Lieferkettenprobleme noch durch geopolitische Ereignisse oder internationale Rohstoffpreisbewegungen unterbrochen werden.',
        },
      ],
    },
    fr: {
      title: 'Énergie géothermique',
      tagline: 'Énergie de base depuis le cœur de la Terre',
      description: 'L\u2019énergie géothermique exploite la chaleur interne de la Terre — une ressource pratiquement inépuisable, disponible 24 heures sur 24, 365 jours par an. RENERVISION développe des projets géothermiques pour la production d\u2019électricité et le chauffage direct dans les régions européennes géologiquement actives.',
      howItWorks: [
        {
          title: 'Évaluation de la ressource',
          description: 'Le potentiel géothermique est cartographié par des études sismiques, gravimétriques et des analyses de gradient de température. Les ressources à haute enthalpie (>150 °C), adaptées à la production d\u2019électricité, se trouvent dans les zones volcaniquement actives ; les ressources à basse enthalpie (30–150 °C) pour le chauffage urbain sont présentes dans une grande partie de l\u2019Europe.',
        },
        {
          title: 'Forage des puits',
          description: 'Des puits de production sont forés à des profondeurs de 1 à 5 km pour atteindre le réservoir géothermique. Le forage directionnel permet de réaliser plusieurs puits depuis une seule plateforme, minimisant l\u2019emprise en surface. Les puits d\u2019injection restituent l\u2019eau refroidie au réservoir, assurant la pérennité de la ressource.',
        },
        {
          title: 'Conversion énergétique',
          description: 'La vapeur à haute température (centrales à vapeur sèche ou à détente flash) entraîne directement les turbines. Pour les températures plus basses (70–150 °C), les centrales à cycle binaire utilisent un fluide de travail à point d\u2019ébullition inférieur (par exemple l\u2019isopentane) dans un circuit secondaire fermé — sans émission de vapeur dans l\u2019atmosphère.',
        },
        {
          title: 'Applications de chaleur directe',
          description: 'Les fluides géothermiques à 30–90 °C sont idéaux pour les réseaux de chaleur urbains, les serres agricoles, l\u2019aquaculture et les procédés industriels. Les systèmes en cascade utilisent le même fluide de puits successivement pour la production d\u2019électricité, le chauffage et la chaleur industrielle, maximisant l\u2019efficacité.',
        },
      ],
      benefits: [
        {
          title: 'Production de base continue',
          description: 'Les centrales géothermiques fonctionnent avec des facteurs de capacité de 90 à 95 % — plus fiables que toute autre source renouvelable. Contrairement au solaire et à l\u2019éolien, la production n\u2019est pas affectée par la météo, la saison ou l\u2019heure du jour.',
        },
        {
          title: 'Emprise au sol minuscule',
          description: 'Une centrale géothermique de 100 MW occupe environ 1 km², puits et infrastructures compris — soit environ un vingt-cinquième de la surface requise par un parc solaire équivalent.',
        },
        {
          title: 'Émissions très faibles',
          description: 'Les centrales modernes à cycle binaire sont des systèmes en boucle fermée avec des émissions atmosphériques quasi nulles. L\u2019équivalent CO₂ sur le cycle de vie est de 15 à 55 g/kWh — parmi les sources d\u2019électricité les plus propres disponibles.',
        },
        {
          title: 'Coûts stables et prévisibles',
          description: 'Après le forage (le principal poste de dépenses en capital), la production géothermique a des coûts d\u2019exploitation très bas et prévisibles, ce qui en fait un excellent complément en base aux énergies renouvelables variables.',
        },
        {
          title: 'Double source de revenus',
          description: 'Là où des marchés de chaleur existent parallèlement aux marchés de l\u2019électricité, les systèmes géothermiques en cascade génèrent des revenus simultanément sur les deux, améliorant significativement l\u2019économie du projet.',
        },
        {
          title: 'Sécurité énergétique locale',
          description: 'Les ressources géothermiques sont indigènes — elles ne peuvent être perturbées ni par des problèmes de chaîne d\u2019approvisionnement, ni par des événements géopolitiques, ni par les fluctuations des prix des matières premières internationales.',
        },
      ],
    },
    es: {
      title: 'Energía geotérmica',
      tagline: 'Energía de base desde el núcleo de la Tierra',
      description: 'La energía geotérmica aprovecha el calor interno de la Tierra — un recurso prácticamente inagotable disponible las 24 horas del día, los 365 días del año. RENERVISION desarrolla proyectos geotérmicos tanto para generación eléctrica como para aplicaciones de calefacción directa en regiones europeas geológicamente activas.',
      howItWorks: [
        {
          title: 'Evaluación del recurso',
          description: 'El potencial geotérmico se cartografía mediante estudios sísmicos, gravimétricos y análisis del gradiente de temperatura. Los recursos de alta entalpía (>150 °C) aptos para generación eléctrica se encuentran en zonas volcánicamente activas; los de baja entalpía (30–150 °C) para calefacción urbana se hallan en gran parte de Europa.',
        },
        {
          title: 'Perforación de pozos',
          description: 'Se perforan pozos de producción a profundidades de 1–5 km para alcanzar el reservorio geotérmico. La perforación direccional permite múltiples pozos desde una sola plataforma, minimizando la alteración de la superficie. Los pozos de reinyección devuelven el agua enfriada al reservorio, garantizando la sostenibilidad.',
        },
        {
          title: 'Conversión de energía',
          description: 'El vapor a alta temperatura (centrales de vapor seco o flash) acciona las turbinas directamente. Para temperaturas más bajas (70–150 °C), las centrales de ciclo binario utilizan un fluido de trabajo con menor punto de ebullición (p. ej. isopentano) en un circuito secundario cerrado, sin emitir vapor a la atmósfera.',
        },
        {
          title: 'Aplicaciones de calor directo',
          description: 'Los fluidos geotérmicos a 30–90 °C son ideales para redes de calefacción urbana, agricultura en invernaderos, acuicultura y procesos industriales. Los sistemas en cascada usan el mismo fluido del pozo para generación eléctrica, calefacción y calor de proceso en secuencia, maximizando la eficiencia.',
        },
      ],
      benefits: [
        {
          title: 'Energía de base continua',
          description: 'Las centrales geotérmicas operan con factores de capacidad del 90–95 %, con mayor fiabilidad que cualquier otra renovable. A diferencia de la solar y la eólica, la producción no se ve afectada por el clima, la estación ni la hora del día.',
        },
        {
          title: 'Huella territorial mínima',
          description: 'Una central geotérmica de 100 MW ocupa aproximadamente 1 km² incluyendo todos los pozos e infraestructura, alrededor de 1/25 del terreno requerido por una granja solar equivalente.',
        },
        {
          title: 'Emisiones muy bajas',
          description: 'Las centrales modernas de ciclo binario son sistemas de circuito cerrado con emisiones atmosféricas casi nulas. El CO₂ equivalente en ciclo de vida es de 15–55 g/kWh, entre las fuentes de energía más limpias disponibles.',
        },
        {
          title: 'Costes estables y predecibles',
          description: 'Tras la perforación de pozos (el principal coste de capital), la generación geotérmica tiene costes operativos muy bajos y predecibles, lo que la convierte en un excelente complemento de base para las renovables variables.',
        },
        {
          title: 'Doble fuente de ingresos',
          description: 'Donde existen mercados de calor junto a mercados eléctricos, los sistemas geotérmicos en cascada generan ingresos de ambos simultáneamente, mejorando significativamente la economía del proyecto.',
        },
        {
          title: 'Seguridad energética local',
          description: 'Los recursos geotérmicos son autóctonos: no pueden ser interrumpidos por problemas en la cadena de suministro, eventos geopolíticos ni movimientos de precios de materias primas internacionales.',
        },
      ],
    },
    hr: {
      title: 'Geotermalna energija',
      tagline: 'Bazna energija iz središta Zemlje',
      description: 'Geotermalna energija koristi unutarnju toplinu Zemlje — praktički neiscrpan resurs dostupan 24 sata dnevno, 365 dana u godini. RENERVISION razvija geotermalne projekte za proizvodnju električne energije i izravne grijalne primjene u geološki aktivnim europskim regijama.',
      howItWorks: [
        {
          title: 'Procjena resursa',
          description: 'Geotermalni potencijal kartira se seizmičkim istraživanjima, gravimetrijskim studijama i analizom temperaturnog gradijenta. Resursi visoke entalpije (>150 °C) pogodni za proizvodnju električne energije nalaze se u vulkanski aktivnim zonama; resursi niske entalpije (30–150 °C) za centralno grijanje rasprostranjeni su diljem Europe.',
        },
        {
          title: 'Bušenje bušotina',
          description: 'Proizvodne bušotine buše se do dubina od 1–5 km kako bi se dosegao geotermalni ležaj. Usmjereno bušenje omogućuje više bušotina s jedne platforme, minimizirajući površinske poremećaje. Utisne bušotine vraćaju ohlađenu vodu u ležaj, osiguravajući održivost.',
        },
        {
          title: 'Pretvorba energije',
          description: 'Para visoke temperature (elektrane na suhu paru ili flash elektrane) izravno pokreće turbine. Za niže temperature (70–150 °C), binarne elektrane koriste radni medij s nižim vrelištem (npr. izopentan) u zatvorenom sekundarnom krugu — bez ispuštanja pare u atmosferu.',
        },
        {
          title: 'Primjene izravne topline',
          description: 'Geotermalni fluidi na 30–90 °C idealni su za mreže centralnog grijanja, stakleničku poljoprivredu, akvakulturu i industrijske procese. Kaskadni sustavi koriste isti fluid iz bušotine za proizvodnju električne energije, grijanje prostora i procesnu toplinu u nizu, maksimizirajući učinkovitost.',
        },
      ],
      benefits: [
        {
          title: 'Kontinuirana bazna energija',
          description: 'Geotermalne elektrane rade s faktorima kapaciteta od 90–95 % — pouzdanije od bilo koje druge obnovljive energije. Za razliku od solarne i vjetroenergetike, proizvodnja nije pod utjecajem vremena, godišnjeg doba ni doba dana.',
        },
        {
          title: 'Minimalan prostorni otisak',
          description: 'Geotermalna elektrana od 100 MW zauzima otprilike 1 km² uključujući sve bušotine i infrastrukturu — oko 1/25 zemljišta potrebnog za ekvivalentnu solarnu farmu.',
        },
        {
          title: 'Vrlo niske emisije',
          description: 'Moderne binarne elektrane su zatvoreni sustavi s gotovo nultim atmosferskim emisijama. Ekvivalent CO₂ u životnom ciklusu iznosi 15–55 g/kWh — među najčišćim raspoloživim izvorima energije.',
        },
        {
          title: 'Stabilni i predvidljivi troškovi',
          description: 'Nakon bušenja bušotina (glavnog kapitalnog troška), geotermalna proizvodnja ima vrlo niske i predvidljive operativne troškove, što je čini izvrsnom baznom dopunom varijabilnim obnovljivim izvorima.',
        },
        {
          title: 'Dvostruki tok prihoda',
          description: 'Gdje uz tržište električne energije postoje i tržišta topline, kaskadni geotermalni sustavi istovremeno generiraju prihode iz oba izvora, značajno poboljšavajući ekonomiku projekta.',
        },
        {
          title: 'Lokalna energetska sigurnost',
          description: 'Geotermalni resursi su autohtoni — ne mogu biti poremećeni problemima u opskrbnom lancu, geopolitičkim događajima ni kretanjima cijena međunarodnih sirovina.',
        },
      ],
    },
    zh: {
      title: '地热能',
      tagline: '来自地球核心的基荷电力',
      description: '地热能利用地球内部热量——这是一种几乎取之不尽的资源，每天24小时、每年365天均可使用。RENERVISION在欧洲地质活跃区域开发地热项目，用于发电和直接供热应用。',
      howItWorks: [
        {
          title: '资源评估',
          description: '通过地震勘探、重力研究和温度梯度分析来评估地热潜力。适用于发电的高焓资源（>150°C）分布在火山活跃带；适用于区域供热的低焓资源（30-150°C）则广泛分布于欧洲大部分地区。',
        },
        {
          title: '钻井作业',
          description: '生产井钻至1-5公里深度以到达地热储层。定向钻井技术允许从单个井场钻取多口井，最大限度减少地表扰动。回灌井将冷却后的水注回储层，确保可持续利用。',
        },
        {
          title: '电力转换',
          description: '高温蒸汽（干蒸汽或闪蒸电站）直接驱动汽轮机。对于较低温度（70-150°C），双循环电站在密闭的二次回路中使用沸点更低的工质（如异戊烷），不向大气排放蒸汽。',
        },
        {
          title: '直接供热应用',
          description: '30-90°C的地热流体非常适合区域供热管网、温室农业、水产养殖和工业过程用热。梯级利用系统将同一口井的热流体依次用于发电、空间供热和过程用热，实现效率最大化。',
        },
      ],
      benefits: [
        {
          title: '持续基荷发电',
          description: '地热电站以90-95%的容量因子运行——比任何其他可再生能源都更可靠。与太阳能和风能不同，其出力不受天气、季节或时间的影响。',
        },
        {
          title: '极小占地面积',
          description: '一座100 MW地热电站（含所有井场和基础设施）仅占约1平方公里——约为同等规模太阳能电站所需土地的1/25。',
        },
        {
          title: '极低排放',
          description: '现代双循环电站是闭环系统，几乎零大气排放。全生命周期二氧化碳当量为15-55克/千瓦时——属于最清洁的发电方式之一。',
        },
        {
          title: '稳定、可预测的成本',
          description: '钻井（主要资本支出）完成后，地热发电的运营成本极低且可预测，使其成为波动性可再生能源的优秀基荷补充。',
        },
        {
          title: '双重收入来源',
          description: '在电力市场和热力市场并存的地区，梯级利用地热系统可同时从两个市场获得收入，显著改善项目经济性。',
        },
        {
          title: '本地能源安全',
          description: '地热资源是本土资源——不会受到供应链问题、地缘政治事件或国际大宗商品价格波动的干扰。',
        },
      ],
    },
  },
  'waste-to-energy': {
    de: {
      title: 'Abfallverwertung',
      tagline: 'Gesellschaftlichen Abfall in saubere Energie verwandeln',
      description: 'Waste-to-Energy-Technologie (WtE) verbrennt kommunale und industrielle Festabfälle unter streng kontrollierten Bedingungen zur Gewinnung von Strom und Wärme — und löst damit gleichzeitig ein Abfallproblem und erzeugt zuverlässige Grundlastenergie. RENERVISION bietet komplette WtE-Anlagenplanung, Genehmigung und Betriebsdienstleistungen.',
      howItWorks: [
        {
          title: 'Abfallannahme und Vorbehandlung',
          description: 'Eingehender Siedlungsabfall (MSW) wird von Sammelfahrzeugen in eine Annahmehalle unter Unterdruck angeliefert, um Geruchsemissionen zu verhindern. Ein Kran homogenisiert den Bunkerinhalt vor der Beschickung des Verbrennungsrostes und gewährleistet so einen stabilen Heizwert und eine gleichmäßige Verbrennung.',
        },
        {
          title: 'Kontrollierte Verbrennung',
          description: 'Der Abfall verbrennt auf einem Wanderrost bei 850–1.000 °C. Die EU-Industrieemissionsrichtlinie schreibt mindestens 2 Sekunden Verweilzeit bei über 850 °C vor, um organische Schadstoffe zu zerstören. Stützfeuerungen halten die Temperatur bei Phasen niedrigen Heizwerts aufrecht. Schlacke wird extrahiert, gekühlt und zur Metallrückgewinnung und als Zuschlagstoff sortiert.',
        },
        {
          title: 'Energierückgewinnung',
          description: 'Heiße Verbrennungsgase (850–1.000 °C) durchlaufen einen Kessel und erzeugen Hochdruckdampf. Der Dampf treibt einen Turbogenerator zur Stromerzeugung an. Im Kraft-Wärme-Kopplungsbetrieb (KWK) wird Niederdruckdampf für Fernwärmenetze ausgekoppelt und erreicht Gesamtwirkungsgrade von 70–85 %.',
        },
        {
          title: 'Rauchgasreinigung',
          description: 'Ein mehrstufiges Reinigungssystem entfernt Schadstoffe: Elektrofilter fangen Feinstaub ab; trockene oder nasse Wäscher entfernen Säuregase (HCl, SO₂); Aktivkohle-Injektion adsorbiert Schwermetalle und Dioxine; SCR-Katalysatoren reduzieren NOx nahezu auf null. Moderne WtE-Rauchgase sind oft sauberer als Stadtluft.',
        },
      ],
      benefits: [
        {
          title: 'Doppeltes Erlösmodell',
          description: 'WtE-Anlagen erzielen Entsorgungsgebühren von Abfallbehörden für die Abfallannahme UND verkaufen Strom und Wärme. Diese doppelte Einnahmequelle macht die Wirtschaftlichkeit robust und unabhängig von Energiepreisvolatilität.',
        },
        {
          title: 'Grundlast-Zuverlässigkeit',
          description: 'WtE-Anlagen arbeiten mit jährlichen Kapazitätsfaktoren von 80–85 % und liefern konsistente, planbare Leistung, die variable erneuerbare Energien im Netz ergänzt.',
        },
        {
          title: 'Kreislaufwirtschaft-Vorreiter',
          description: 'WtE gewinnt Energie, Metalle und Zuschlagstoffe aus Abfällen zurück, die andernfalls deponiert würden. Die Schlacke-Metallsortierung gewinnt 15–20 kg Metalle pro Tonne verarbeitetem Siedlungsabfall zurück.',
        },
        {
          title: 'Deponievermeidung',
          description: 'Deponien erzeugen Methan — ein Treibhausgas mit 25-fach stärkerer Wirkung als CO₂. Jede von der Deponie zur WtE-Anlage umgeleitete Tonne verhindert Deponiegasemissionen und dauerhafte Bodenkontamination.',
        },
        {
          title: 'EU-konforme Emissionen',
          description: 'Moderne WtE-Anlagen erfüllen die strengen Grenzwerte der EU-Industrieemissionsrichtlinie für alle regulierten Schadstoffe problemlos. Kontinuierliche Emissionsüberwachungssysteme (CEMS) gewährleisten vollständige Transparenz.',
        },
        {
          title: 'Fernwärmeintegration',
          description: 'In KWK-Konfiguration werden WtE-Anlagen zu Kernkomponenten von Fernwärmenetzen — sie liefern ganzjährig bezahlbare, kohlenstoffarme Wärme für Wohn- und Gewerbekunden.',
        },
      ],
    },
    fr: {
      title: 'Valorisation énergétique des déchets',
      tagline: 'Transformer les déchets de la société en énergie propre',
      description: 'La technologie de valorisation énergétique (WtE) incinère les déchets solides municipaux et industriels dans des conditions hautement contrôlées pour récupérer électricité et chaleur — résolvant simultanément un défi de gestion des déchets et générant une énergie de base fiable. RENERVISION assure la conception, l\u2019autorisation et l\u2019exploitation complètes des usines WtE.',
      howItWorks: [
        {
          title: 'Réception et prétraitement des déchets',
          description: 'Les déchets ménagers (OM) sont livrés par les véhicules de collecte dans un hall de réception maintenu en dépression, empêchant les odeurs de s\u2019échapper. Un pont roulant homogénéise le contenu de la fosse avant l\u2019alimentation de la grille de combustion, assurant un pouvoir calorifique stable et une combustion régulière.',
        },
        {
          title: 'Combustion contrôlée',
          description: 'Les déchets brûlent sur une grille mobile à 850–1 000 °C. La directive européenne sur les émissions industrielles impose un temps de séjour d\u2019au moins 2 secondes au-dessus de 850 °C pour détruire les polluants organiques. Des brûleurs auxiliaires maintiennent la température lors des phases de faible pouvoir calorifique. Les mâchefers sont extraits, refroidis et triés pour la récupération des métaux et leur utilisation comme granulats.',
        },
        {
          title: 'Récupération d\u2019énergie',
          description: 'Les gaz de combustion chauds (850–1 000 °C) traversent une chaudière produisant de la vapeur haute pression. La vapeur entraîne un turbo-alternateur pour la production d\u2019électricité. En mode cogénération (CHP), la vapeur basse pression résiduelle est soutirée pour alimenter les réseaux de chaleur urbains, atteignant des rendements globaux de 70 à 85 %.',
        },
        {
          title: 'Traitement des fumées',
          description: 'Un système de traitement multi-étages élimine les polluants : les électrofiltres captent les particules ; les laveurs secs ou humides éliminent les gaz acides (HCl, SO₂) ; l\u2019injection de charbon actif adsorbe les métaux lourds et les dioxines ; les catalyseurs SCR réduisent les NOx à un niveau quasi nul. Les fumées des usines WtE modernes sont souvent plus propres que l\u2019air de la circulation urbaine.',
        },
      ],
      benefits: [
        {
          title: 'Double modèle de revenus',
          description: 'Les usines WtE perçoivent des redevances de traitement des collectivités pour l\u2019acceptation des déchets ET vendent l\u2019électricité et la chaleur. Ce double flux de revenus rend l\u2019économie robuste et indépendante de la volatilité des prix de l\u2019énergie.',
        },
        {
          title: 'Fiabilité en base',
          description: 'Les usines WtE fonctionnent avec des facteurs de capacité annuels de 80 à 85 %, fournissant une production constante et programmable qui complète les énergies renouvelables variables sur le réseau.',
        },
        {
          title: 'Champion de l\u2019économie circulaire',
          description: 'La valorisation énergétique récupère énergie, métaux et granulats à partir de déchets qui seraient autrement mis en décharge. Le tri des métaux dans les mâchefers permet de récupérer 15 à 20 kg de métaux par tonne de déchets ménagers traités.',
        },
        {
          title: 'Détournement de la mise en décharge',
          description: 'Les décharges produisent du méthane — un gaz à effet de serre 25 fois plus puissant que le CO₂. Chaque tonne détournée de la décharge vers la valorisation énergétique évite les émissions de biogaz et la contamination permanente des sols.',
        },
        {
          title: 'Émissions conformes aux normes UE',
          description: 'Les usines WtE modernes respectent aisément les limites strictes de la directive européenne sur les émissions industrielles pour tous les polluants réglementés. Les systèmes de mesure en continu des émissions (SME) garantissent une transparence totale.',
        },
        {
          title: 'Intégration au chauffage urbain',
          description: 'En configuration cogénération, les usines WtE deviennent des actifs structurants des réseaux de chaleur urbains — fournissant une chaleur abordable et bas carbone aux clients résidentiels et commerciaux tout au long de l\u2019année.',
        },
      ],
    },
    es: {
      title: 'Valorización energética de residuos',
      tagline: 'Convirtiendo los residuos de la sociedad en energía limpia',
      description: 'La tecnología Waste-to-Energy (WtE) incinera residuos sólidos municipales e industriales en condiciones altamente controladas para recuperar electricidad y calor — resolviendo simultáneamente un reto de gestión de residuos y generando energía de base fiable. RENERVISION ofrece servicios completos de diseño, autorización y operación de plantas WtE.',
      howItWorks: [
        {
          title: 'Recepción y pretratamiento de residuos',
          description: 'Los residuos sólidos municipales (RSU) se entregan mediante vehículos de recogida en una nave de descarga bajo presión negativa, evitando la fuga de olores. Una grúa homogeneíza el contenido del foso antes de alimentar la parrilla de combustión, asegurando un poder calorífico estable y una combustión uniforme.',
        },
        {
          title: 'Combustión controlada',
          description: 'Los residuos se queman en una parrilla móvil a 850–1000 °C. La Directiva de Emisiones Industriales de la UE exige al menos 2 segundos de permanencia por encima de 850 °C para destruir contaminantes orgánicos. Quemadores auxiliares mantienen la temperatura durante períodos de bajo poder calorífico. Las escorias se extraen, enfrían y clasifican para la recuperación de metales y uso como árido.',
        },
        {
          title: 'Recuperación de energía',
          description: 'Los gases calientes de combustión (850–1000 °C) pasan por una caldera, generando vapor a alta presión. El vapor acciona un turboalternador que produce electricidad. En modo de cogeneración (CHP), el vapor residual de baja presión se extrae para redes de calefacción urbana, alcanzando eficiencias totales del 70–85 %.',
        },
        {
          title: 'Depuración de gases de combustión',
          description: 'Un sistema de limpieza multietapa elimina contaminantes: precipitadores electrostáticos capturan partículas; lavadores secos o húmedos eliminan gases ácidos (HCl, SO₂); la inyección de carbón activado adsorbe metales pesados y dioxinas; catalizadores SCR reducen los NOx a niveles casi nulos. Los gases de las plantas WtE modernas son a menudo más limpios que el aire del tráfico urbano.',
        },
      ],
      benefits: [
        {
          title: 'Modelo de doble ingreso',
          description: 'Las plantas WtE perciben tasas de puerta de las autoridades de residuos por aceptar residuos Y venden electricidad y calor. Esta doble fuente de ingresos hace que la economía sea sólida e independiente de la volatilidad de los precios energéticos.',
        },
        {
          title: 'Fiabilidad de base',
          description: 'Las plantas WtE operan con factores de capacidad anuales del 80–85 %, proporcionando energía consistente y programable que complementa las renovables variables en la red.',
        },
        {
          title: 'Campeón de la economía circular',
          description: 'La WtE recupera energía, metales y áridos de residuos que de otro modo acabarían en vertedero. La clasificación de metales de las escorias recupera 15–20 kg de metales por tonelada de RSU procesada.',
        },
        {
          title: 'Desvío de vertedero',
          description: 'Los vertederos producen metano, un gas de efecto invernadero 25 veces más potente que el CO₂. Cada tonelada desviada del vertedero a la WtE evita emisiones de gas de vertedero y contaminación permanente del suelo.',
        },
        {
          title: 'Emisiones conformes con la UE',
          description: 'Las plantas WtE modernas cumplen holgadamente los estrictos límites de la Directiva de Emisiones Industriales de la UE para todos los contaminantes regulados. Los Sistemas de Monitorización Continua de Emisiones (CEMS) proporcionan total transparencia.',
        },
        {
          title: 'Integración con calefacción urbana',
          description: 'En configuración CHP, las plantas WtE se convierten en activos fundamentales de las redes de calefacción urbana, proporcionando calor asequible y bajo en carbono a clientes residenciales y comerciales durante todo el año.',
        },
      ],
    },
    hr: {
      title: 'Otpad u energiju',
      tagline: 'Pretvaranje društvenog otpada u čistu energiju',
      description: 'Tehnologija pretvorbe otpada u energiju (WtE) spaljuje komunalni i industrijski kruti otpad u strogo kontroliranim uvjetima radi dobivanja električne energije i topline — istovremeno rješavajući problem zbrinjavanja otpada i proizvodnje pouzdane bazne energije. RENERVISION pruža kompletne usluge projektiranja, dozvola i pogona WtE postrojenja.',
      howItWorks: [
        {
          title: 'Prijem i predobrada otpada',
          description: 'Komunalni kruti otpad (KKO) doprema se vozilima za odvoz u halu za istovar pod negativnim tlakom, sprečavajući širenje neugodnih mirisa. Dizalica homogenizira sadržaj jame prije dovođenja na ložišnu rešetku, osiguravajući stabilnu ogrjevnu vrijednost i ravnomjerno izgaranje.',
        },
        {
          title: 'Kontrolirano izgaranje',
          description: 'Otpad izgara na pokretnoj rešetki pri 850–1000 °C. Direktiva EU o industrijskim emisijama zahtijeva najmanje 2 sekunde zadržavanja iznad 850 °C radi uništavanja organskih onečišćivača. Pomoćni plamenici održavaju temperaturu tijekom razdoblja niske ogrjevne vrijednosti. Šljaka se vadi, hladi i sortira za oporabu metala i korištenje kao agregat.',
        },
        {
          title: 'Oporaba energije',
          description: 'Vrući dimni plinovi (850–1000 °C) prolaze kroz kotao, generirajući paru visokog tlaka. Para pokreće turboagregat koji proizvodi električnu energiju. U načinu kogeneracije (CHP), preostala niskotlačna para izvlači se za mreže centralnog grijanja, postižući ukupne učinkovitosti od 70–85 %.',
        },
        {
          title: 'Čišćenje dimnih plinova',
          description: 'Višestupanjski sustav čišćenja uklanja onečišćivače: elektrostatski taložnici hvataju čestice; suhi ili mokri ispirači uklanjaju kisele plinove (HCl, SO₂); upuhivanje aktivnog ugljena adsorbira teške metale i dioksine; SCR katalizatori reduciraju NOx na gotovo nulte razine. Dimni plinovi modernih WtE postrojenja često su čišći od gradskog prometnog zraka.',
        },
      ],
      benefits: [
        {
          title: 'Model dvostrukog prihoda',
          description: 'WtE postrojenja ostvaruju naknade za prihvat otpada od komunalnih vlasti I prodaju električnu energiju i toplinu. Ovaj dvostruki tok prihoda čini ekonomiku robusnom i neovisnom o volatilnosti cijena energije.',
        },
        {
          title: 'Bazna pouzdanost',
          description: 'WtE postrojenja rade s godišnjim faktorima kapaciteta od 80–85 %, pružajući dosljednu, planiranu energiju koja nadopunjuje varijabilne obnovljive izvore u mreži.',
        },
        {
          title: 'Prvak kružnog gospodarstva',
          description: 'WtE oporabljuje energiju, metale i agregate iz otpada koji bi inače završio na odlagalištu. Sortiranje metala iz šljake oporabljuje 15–20 kg metala po toni obrađenog KKO-a.',
        },
        {
          title: 'Preusmjeravanje s odlagališta',
          description: 'Odlagališta proizvode metan — staklenički plin 25 puta potentniji od CO₂. Svaka tona preusmjerena s odlagališta u WtE sprečava emisije odlagališnog plina i trajno onečišćenje tla.',
        },
        {
          title: 'Emisije usklađene s EU',
          description: 'Moderna WtE postrojenja s lakoćom ispunjavaju stroge granične vrijednosti Direktive EU o industrijskim emisijama za sve regulirane onečišćivače. Sustavi za kontinuirani nadzor emisija (CEMS) pružaju potpunu transparentnost.',
        },
        {
          title: 'Integracija s centralnim grijanjem',
          description: 'U konfiguraciji kogeneracije, WtE postrojenja postaju okosnica mreža centralnog grijanja — pružajući pristupačnu, niskougljičnu toplinu stambenim i komercijalnim korisnicima tijekom cijele godine.',
        },
      ],
    },
    zh: {
      title: '垃圾发电',
      tagline: '将社会废物转化为清洁能源',
      description: '垃圾发电（WtE）技术在高度受控的条件下燃烧城市和工业固体废物以回收电力和热能——同时解决废物管理难题并产生可靠的基荷电力。RENERVISION提供完整的WtE电站设计、许可审批和运营服务。',
      howItWorks: [
        {
          title: '废物接收与预处理',
          description: '收运车辆将城市生活垃圾（MSW）送入负压卸料大厅，防止异味外溢。行车抓斗对垃圾坑内容物进行均质化处理后送入焚烧炉排，确保稳定的热值和平稳的燃烧过程。',
        },
        {
          title: '可控焚烧',
          description: '垃圾在移动炉排上以850-1,000°C的温度燃烧。欧盟工业排放指令要求在850°C以上至少停留2秒以分解有机污染物。辅助燃烧器在低热值时段维持温度。底渣经冷却、分选后用于金属回收和骨料利用。',
        },
        {
          title: '能量回收',
          description: '850-1,000°C的高温烟气通过余热锅炉产生高压蒸汽。蒸汽驱动汽轮发电机组发电。在热电联产（CHP）模式下，低压蒸汽被引出用于区域供热管网，总效率可达70-85%。',
        },
        {
          title: '烟气净化',
          description: '多级烟气净化系统去除各类污染物：静电除尘器捕集颗粒物；干法或湿法脱酸塔去除酸性气体（HCl、SO₂）；活性炭喷射吸附重金属和二噁英；SCR催化剂将氮氧化物降至近零水平。现代垃圾焚烧烟气往往比城市交通尾气更清洁。',
        },
      ],
      benefits: [
        {
          title: '双重收入模式',
          description: 'WtE电站既从废物管理部门收取处理费，又出售电力和热能。这种双重收入流使其经济效益稳健，不受能源价格波动影响。',
        },
        {
          title: '基荷可靠性',
          description: 'WtE电站以80-85%的年容量因子运行，提供持续、可调度的电力，与电网上的波动性可再生能源形成有效互补。',
        },
        {
          title: '循环经济先锋',
          description: 'WtE从原本将被填埋的废物中回收能源、金属和骨料。底渣金属分选每吨生活垃圾可回收15-20公斤金属。',
        },
        {
          title: '减少填埋',
          description: '填埋产生甲烷——一种温室效应是二氧化碳25倍的气体。每吨从填埋转向WtE处理的废物都能减少填埋气排放和永久性土壤污染。',
        },
        {
          title: '符合欧盟排放标准',
          description: '现代WtE电站轻松达到严格的欧盟工业排放指令对所有受控污染物的限值。烟气连续排放监测系统（CEMS）确保完全透明。',
        },
        {
          title: '区域供热集成',
          description: '在热电联产配置下，WtE电站成为区域供热管网的骨干资产——全年为住宅和商业用户提供经济实惠的低碳热力。',
        },
      ],
    },
  },
  consulting: {
    de: {
      title: 'Energieberatung',
      tagline: 'Fachkundige Begleitung vom Konzept bis zum Finanzabschluss',
      description: 'Erfolgreiche Projekte im Bereich erneuerbarer Energien basieren auf gründlicher Analyse und tiefem regulatorischem Wissen. Die Beratungspraxis von RENERVISION bietet unabhängige Machbarkeitsstudien, Netzanschlussberatung, Genehmigungsunterstützung und Finanzmodellierung für Investoren, Entwickler und Kommunen in ganz Europa.',
      howItWorks: [
        {
          title: 'Machbarkeits- und Ressourcenstudie',
          description: 'Wir beginnen mit einer rigorosen Ressourcenbewertung — Sonneneinstrahlung, Windgeschwindigkeitsverteilung, hydrologische Abflussdaten oder geothermischer Gradient — kombiniert mit einem übergeordneten Finanzmodell, um die wirtschaftliche Tragfähigkeit eines Standorts zu prüfen, bevor erhebliches Kapital eingesetzt wird.',
        },
        {
          title: 'Netzanschluss und technische Planung',
          description: 'Wir führen Lastfluss- und Kurzschlussberechnungen durch, um den optimalen Netzanschlusspunkt und die Spannungsebene zu bestimmen. Vorläufige Übersichtsschaltpläne, Ausrüstungsspezifikationen und Anschlusskostenschätzungen ermöglichen es Kreditgebern und Investoren, technische Risiken frühzeitig zu bewerten.',
        },
        {
          title: 'Genehmigungs- und Regulierungsstrategie',
          description: 'Unsere Genehmigungsspezialisten erfassen jede erforderliche Zustimmung — Umweltverträglichkeitsprüfung, Baugenehmigung, Netzanschlussvereinbarung, Betriebsgenehmigung — im Rahmen der jeweiligen nationalen und EU-Regulierung. Wir erstellen Antragsunterlagen, begleiten Konsultationen und vertreten Mandanten in Verwaltungsverfahren.',
        },
        {
          title: 'Finanzmodellierung und Investitionsberatung',
          description: 'Detaillierte Projektfinanzmodelle umfassen Kapitalstruktur, Schuldendienst, Erlöse unter verschiedenen Tarifszenarien, Sensitivitätsanalysen und Investorenrenditen (IRR, NPV, DSCR). Wir begleiten Fremdfinanzierung, Eigenkapitalbeschaffung und PPA-Verhandlungen mit Abnehmern.',
        },
      ],
      benefits: [
        {
          title: 'Risikominimierung',
          description: 'Fundierte Machbarkeitsanalysen identifizieren kritische Schwachstellen, bevor erhebliches Kapital gebunden wird — und bewahren Entwickler vor kostspieligen Fehlern bei Standortwahl, Netzanschluss oder Regulierungsstrategie.',
        },
        {
          title: 'Schnellere Genehmigung',
          description: 'Projekte mit erfahrener Beraterunterstützung durchlaufen Genehmigungsverfahren schneller. Unsere Genehmigungserfolgsquote von 94 % spiegelt tiefgreifendes Wissen darüber wider, was in jedem EU-Land funktioniert.',
        },
        {
          title: 'Bessere Finanzierungskonditionen',
          description: 'Kreditgeber und Eigenkapitalinvestoren zahlen einen Aufschlag für gut vorbereitete Projekte. Gründliche technische und finanzielle Dokumentation senkt das wahrgenommene Risiko, reduziert die Kapitalkosten und verbessert die Vertragskonditionen.',
        },
        {
          title: 'Optimiertes Design',
          description: 'Unabhängige Ingenieursprüfungen identifizieren häufig erhebliche Ertragssteigerungen (2–8 %) oder Kosteneinsparungen durch überarbeitetes Layout, Ausrüstungswahl oder Anschlussstrategie.',
        },
        {
          title: 'Technologieneutrale Beratung',
          description: 'Wir haben keine Interessen am Anlagenverkauf. Unsere Beratung konzentriert sich ausschließlich auf den Projekterfolg — wir wählen die richtige Technologie für jeden Standort, statt einen bevorzugten Lieferanten zu fördern.',
        },
        {
          title: 'Fortlaufende Beratung',
          description: 'Unsere Beziehung setzt sich nach der Inbetriebnahme fort: jährliche Performance-Audits, Refinanzierungsberatung, Gesetzesänderungsanalysen und O&M-Benchmarking sorgen dafür, dass Ihre Anlage über ihre gesamte Lebensdauer hinweg optimal arbeitet.',
        },
      ],
    },
    fr: {
      title: 'Conseil en énergie',
      tagline: 'Accompagnement expert du concept au bouclage financier',
      description: 'Les projets d\u2019énergie renouvelable réussis reposent sur une analyse rigoureuse et une connaissance approfondie de la réglementation. Le pôle conseil de RENERVISION propose des études de faisabilité indépendantes, du conseil en raccordement réseau, un appui aux autorisations et de la modélisation financière pour les investisseurs, développeurs et collectivités à travers l\u2019Europe.',
      howItWorks: [
        {
          title: 'Étude de faisabilité et de ressource',
          description: 'Nous débutons par une évaluation rigoureuse de la ressource — irradiation solaire, distribution des vitesses de vent, données hydrologiques ou gradient géothermique — combinée à un modèle financier de haut niveau pour déterminer la viabilité économique d\u2019un site avant l\u2019engagement de capitaux importants.',
        },
        {
          title: 'Raccordement réseau et conception technique',
          description: 'Nous réalisons des études de transit de puissance et d\u2019analyse de court-circuit pour déterminer le point de raccordement optimal et le niveau de tension. Des schémas unifilaires préliminaires, des spécifications d\u2019équipements et des estimations de coûts de raccordement permettent aux prêteurs et investisseurs d\u2019appréhender les risques techniques en amont.',
        },
        {
          title: 'Stratégie d\u2019autorisation et réglementaire',
          description: 'Nos spécialistes en autorisations cartographient chaque consentement requis — étude d\u2019impact environnemental, permis de construire, convention de raccordement, autorisations d\u2019exploitation — dans le cadre réglementaire national et européen applicable. Nous préparons les dossiers de demande, gérons les consultations et représentons les clients dans les procédures administratives.',
        },
        {
          title: 'Modélisation financière et conseil en investissement',
          description: 'Des modèles de financement de projet détaillés couvrent la structure de capital, le service de la dette, les revenus sous différents scénarios tarifaires, l\u2019analyse de sensibilité et les rendements pour les investisseurs (TRI, VAN, DSCR). Nous accompagnons le financement par dette, les levées de fonds propres et les négociations de PPA avec les acheteurs.',
        },
      ],
      benefits: [
        {
          title: 'Réduction des risques',
          description: 'L\u2019analyse de faisabilité experte identifie les défauts rédhibitoires avant l\u2019engagement de capitaux importants — évitant aux développeurs des erreurs coûteuses dans le choix du site, le raccordement réseau ou la stratégie réglementaire.',
        },
        {
          title: 'Autorisations plus rapides',
          description: 'Les projets accompagnés par des consultants expérimentés avancent plus rapidement dans les processus réglementaires. Notre taux de succès de 94 % en matière d\u2019autorisations reflète une connaissance approfondie de ce qui fonctionne dans chaque juridiction européenne.',
        },
        {
          title: 'Meilleures conditions de financement',
          description: 'Les prêteurs et investisseurs en fonds propres valorisent les projets bien préparés. Une documentation technique et financière rigoureuse réduit le risque perçu, abaissant le coût du capital et améliorant les conditions contractuelles.',
        },
        {
          title: 'Conception optimisée',
          description: 'La revue d\u2019ingénierie indépendante identifie souvent des améliorations significatives du productible (2 à 8 %) ou des économies de coûts grâce à un agencement révisé, une sélection d\u2019équipements ou une stratégie de raccordement optimisée.',
        },
        {
          title: 'Conseil indépendant de toute technologie',
          description: 'Nous n\u2019avons aucun intérêt dans la vente d\u2019équipements. Notre conseil est entièrement tourné vers le succès du projet — nous sélectionnons la technologie adaptée à chaque site plutôt que de promouvoir un fournisseur privilégié.',
        },
        {
          title: 'Accompagnement continu',
          description: 'Notre relation se poursuit après la mise en service : audits de performance annuels, conseil en refinancement, analyse des évolutions réglementaires et benchmarking de l\u2019exploitation et maintenance garantissent la performance optimale de votre actif tout au long de sa durée de vie.',
        },
      ],
    },
    es: {
      title: 'Consultoría energética',
      tagline: 'Asesoramiento experto del concepto al cierre financiero',
      description: 'Los proyectos exitosos de energía renovable se construyen sobre un análisis riguroso y un profundo conocimiento regulatorio. La práctica de consultoría de RENERVISION ofrece estudios de viabilidad independientes, asesoramiento en conexión a la red, apoyo en permisos y modelización financiera para inversores, promotores y municipios en toda Europa.',
      howItWorks: [
        {
          title: 'Estudio de viabilidad y recursos',
          description: 'Comenzamos con una rigurosa evaluación del recurso — irradiación solar, distribución de velocidad del viento, datos de caudal hidrológico o gradiente geotérmico — combinada con un modelo financiero preliminar para determinar si un emplazamiento tiene una economía de proyecto viable antes de comprometer capital significativo.',
        },
        {
          title: 'Conexión a la red y diseño técnico',
          description: 'Realizamos estudios de flujo de carga y análisis de cortocircuito para determinar el punto óptimo de conexión a la red y el nivel de tensión. Los diagramas unifilares preliminares, las especificaciones de equipos y las estimaciones de coste de conexión permiten a prestamistas e inversores comprender los riesgos técnicos con antelación.',
        },
        {
          title: 'Estrategia de permisos y regulatoria',
          description: 'Nuestros especialistas en permisos identifican cada autorización requerida — evaluación de impacto ambiental, licencias de obra, acuerdo de conexión a la red, licencias de operación — dentro de los marcos regulatorios nacionales y de la UE aplicables. Preparamos las solicitudes, gestionamos las consultas y representamos a los clientes en procedimientos regulatorios.',
        },
        {
          title: 'Modelización financiera y asesoría de inversión',
          description: 'Los modelos financieros detallados cubren la estructura de capital, el servicio de la deuda, los ingresos bajo diversos escenarios tarifarios, el análisis de sensibilidad y los rendimientos del inversor (TIR, VAN, RCSD). Apoyamos la financiación de deuda, los procesos de captación de capital y las negociaciones de PPA con compradores.',
        },
      ],
      benefits: [
        {
          title: 'Reducción de riesgos',
          description: 'El análisis experto de viabilidad identifica defectos fatales antes de gastar capital significativo, ahorrando a los promotores errores costosos en la selección del emplazamiento, la conexión a la red o la estrategia regulatoria.',
        },
        {
          title: 'Tramitación más rápida',
          description: 'Los proyectos respaldados por consultores experimentados avanzan más rápido en los procesos regulatorios. Nuestra tasa de éxito en permisos del 94 % refleja un profundo conocimiento de lo que funciona en cada jurisdicción de la UE.',
        },
        {
          title: 'Mejores condiciones de financiación',
          description: 'Los prestamistas e inversores de capital valoran los proyectos bien preparados. Una documentación técnica y financiera rigurosa reduce el riesgo percibido, disminuyendo el coste de capital y mejorando las condiciones del acuerdo.',
        },
        {
          title: 'Diseño optimizado',
          description: 'La revisión de ingeniería independiente a menudo identifica mejoras significativas de rendimiento (2–8 %) o ahorros de costes mediante la revisión del diseño, la selección de equipos o la estrategia de conexión.',
        },
        {
          title: 'Asesoramiento agnóstico tecnológicamente',
          description: 'No tenemos intereses en la venta de equipos. Nuestro asesoramiento se centra exclusivamente en el éxito del proyecto, seleccionando la tecnología adecuada para cada emplazamiento en lugar de promocionar un proveedor preferido.',
        },
        {
          title: 'Asesoramiento continuo',
          description: 'Nuestra relación continúa tras la construcción: auditorías anuales de rendimiento, asesoría de refinanciación, análisis de cambios legislativos y benchmarking de O&M mantienen su activo funcionando al máximo durante toda su vida útil.',
        },
      ],
    },
    hr: {
      title: 'Energetsko savjetovanje',
      tagline: 'Stručno vođenje od koncepta do financijskog zaključenja',
      description: 'Uspješni projekti obnovljive energije temelje se na temeljitoj analizi i dubokom regulatornom znanju. Savjetodavna praksa RENERVISION-a pruža neovisne studije izvedivosti, savjetovanje o priključenju na mrežu, podršku u ishođenju dozvola i financijsko modeliranje za investitore, developere i općine diljem Europe.',
      howItWorks: [
        {
          title: 'Studija izvedivosti i resursa',
          description: 'Započinjemo temeljitom procjenom resursa — sunčevo zračenje, distribucija brzine vjetra, hidrološki podaci o protoku ili geotermalni gradijent — u kombinaciji s preliminarnim financijskim modelom kako bismo utvrdili ima li lokacija održivu ekonomiku projekta prije ulaganja značajnog kapitala.',
        },
        {
          title: 'Priključenje na mrežu i tehnički dizajn',
          description: 'Provodimo studije tokova snaga i analize kratkog spoja kako bismo odredili optimalnu točku priključenja na mrežu i naponsku razinu. Preliminarne jednolinijske sheme, specifikacije opreme i procjene troškova priključenja omogućuju zajmodavcima i investitorima rano razumijevanje tehničkih rizika.',
        },
        {
          title: 'Strategija dozvola i regulatorna strategija',
          description: 'Naši stručnjaci za dozvole mapiraju svaku potrebnu suglasnost — procjenu utjecaja na okoliš, građevinske dozvole, ugovor o priključenju na mrežu, operativne dozvole — unutar relevantnih nacionalnih i EU regulatornih okvira. Pripremamo pakete zahtjeva, vodimo konzultacije i zastupamo klijente u regulatornim postupcima.',
        },
        {
          title: 'Financijsko modeliranje i investicijsko savjetovanje',
          description: 'Detaljni modeli projektnog financiranja pokrivaju strukturu kapitala, servisiranje duga, prihode pod različitim tarifnim scenarijima, analizu osjetljivosti i povrate investitora (IRR, NPV, DSCR). Podržavamo financiranje duga, procese prikupljanja kapitala i pregovore o PPA-u s otkupljivačima.',
        },
      ],
      benefits: [
        {
          title: 'Smanjenje rizika',
          description: 'Stručna analiza izvedivosti identificira fatalne nedostatke prije ulaganja značajnog kapitala — štedi developere od skupih pogrešaka pri odabiru lokacije, priključenju na mrežu ili regulatornoj strategiji.',
        },
        {
          title: 'Brže ishođenje dozvola',
          description: 'Projekti koje podržavaju iskusni konzultanti brže prolaze regulatorne postupke. Naša stopa uspješnosti dozvola od 94 % odražava duboko znanje o tome što funkcionira u svakoj EU jurisdikciji.',
        },
        {
          title: 'Bolji uvjeti financiranja',
          description: 'Zajmodavci i ulagači u kapital plaćaju premiju za dobro pripremljene projekte. Temeljita tehnička i financijska dokumentacija smanjuje percipirani rizik, snižava cijenu kapitala i poboljšava uvjete ugovora.',
        },
        {
          title: 'Optimizirani dizajn',
          description: 'Neovisna inženjerska revizija često identificira značajna poboljšanja prinosa (2–8 %) ili uštede kroz revidirani raspored, odabir opreme ili strategiju priključenja.',
        },
        {
          title: 'Tehnološki nepristran savjet',
          description: 'Nemamo interesa u prodaji opreme. Naš savjet u potpunosti je usmjeren na uspjeh projekta — što znači da odabiremo pravu tehnologiju za svaku lokaciju umjesto promicanja preferiranog dobavljača.',
        },
        {
          title: 'Trajno savjetovanje',
          description: 'Naš odnos nastavlja se nakon izgradnje: godišnje revizije učinkovitosti, savjetovanje o refinanciranju, analiza zakonodavnih promjena i benchmarking održavanja i pogona održavaju vaše postrojenje na vrhuncu performansi tijekom cijelog životnog vijeka.',
        },
      ],
    },
    zh: {
      title: '能源咨询',
      tagline: '从概念到融资关闭的专业指导',
      description: '成功的可再生能源项目建立在严谨的分析和深入的法规知识基础上。RENERVISION的咨询业务为欧洲各地的投资者、开发商和市政当局提供独立可行性研究、并网咨询、许可支持和财务建模服务。',
      howItWorks: [
        {
          title: '可行性与资源研究',
          description: '我们从严谨的资源评估入手——太阳辐照、风速分布、水文流量数据或地温梯度——并结合高层级财务模型，在投入大量资金之前确定项目选址是否具有可行的经济效益。',
        },
        {
          title: '并网与技术设计',
          description: '我们进行潮流计算和短路分析，确定最佳并网点和电压等级。初步单线图、设备规格和接入费用估算使贷方和投资者能够尽早了解技术风险。',
        },
        {
          title: '许可与法规策略',
          description: '我们的许可专家梳理所有必需的审批——环境影响评价、建设许可、并网协议、运营执照——涵盖相关的国家和欧盟法规框架。我们准备申请材料、管理咨询流程并在监管程序中代表客户。',
        },
        {
          title: '财务建模与投资咨询',
          description: '详尽的项目融资模型涵盖资本结构、偿债能力、不同电价情景下的收入、敏感性分析和投资回报（IRR、NPV、DSCR）。我们支持债务融资、股权募集流程以及与购电方的PPA谈判。',
        },
      ],
      benefits: [
        {
          title: '降低风险',
          description: '专业的可行性分析在大量资金投入之前识别致命缺陷——帮助开发商避免在选址、并网或法规策略上的昂贵失误。',
        },
        {
          title: '加速审批',
          description: '由经验丰富的咨询顾问支持的项目能更快通过监管流程。我们94%的许可成功率体现了对各欧盟司法管辖区审批要点的深入了解。',
        },
        {
          title: '更优融资条件',
          description: '贷方和股权投资者愿意为准备充分的项目支付溢价。全面的技术和财务文件降低感知风险，从而降低资金成本并改善交易条件。',
        },
        {
          title: '优化设计',
          description: '独立的工程审查通常能通过调整布局、设备选型或接入方案，发现2-8%的显著发电量提升或成本节约机会。',
        },
        {
          title: '技术中立建议',
          description: '我们没有设备销售利益。我们的建议完全以项目成功为导向——为每个项目选择最适合的技术，而非推广特定供应商。',
        },
        {
          title: '持续顾问服务',
          description: '我们的合作关系延续至项目建成后：年度性能审计、再融资咨询、法规变更分析和运维对标服务，确保您的资产在整个生命周期内保持最佳表现。',
        },
      ],
    },
  },
};

export function getServiceText(slug: string, lang: Lang): ServiceText | undefined {
  return serviceTranslations[slug]?.[lang];
}
