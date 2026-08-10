/* =========================================================
   DAILY DISPATCHES — script.js
   Dataset + rendering + search + filter + modal + nav
   ========================================================= */

(function () {
  'use strict';

  /* ---------------------------------------------------------
     1. ARTICLE DATASET
     Every story from the source document is represented here,
     preserving headline, date, category, image URL and content.
  --------------------------------------------------------- */
  const ARTICLES = [
    {
      id: 'aramco-jazan-drone',
      title: 'Saudi Arabia\u2019s Aramco Facility Hit by Suspected Drone Attack as Houthis Claim Responsibility',
      category: 'Security',
      region: 'Middle East',
      date: '2026-08-09',
      dateline: 'JAZAN',
      image: 'https://i.ibb.co/6cxJ3vkx/Firefighters-responding-to-refin-202608091459.jpg',
      imageAlt: 'Firefighters responding to a blaze at the Aramco Jazan refinery complex in Saudi Arabia',
      excerpt: 'Yemen\u2019s Houthi movement has claimed responsibility for a drone attack on a Saudi Aramco complex in Jazan after a fire broke out at the refinery early Sunday, though Saudi authorities have not confirmed the cause.',
      featured: true,
      lead: true,
      tags: ['Aramco', 'Houthi', 'Jazan refinery', 'drone attack', 'Saudi Arabia', 'energy security', 'Red Sea'],
      content: [
        'A new security crisis is brewing in the Middle East after Yemen\u2019s Houthi movement claimed responsibility for a drone attack targeting a Saudi Aramco complex in Jazan, southwestern Saudi Arabia.',
        'The event began early Sunday morning, when a fire broke out at a plant belonging to Saudi Aramco\u2019s Jazan refinery. Saudi authorities stated that the incident was immediately brought under control by the refinery\u2019s emergency reaction personnel, and no injuries have been recorded.',
        'However, the origin of the incident became the center of worldwide attention after the Houthi movement declared that it had deliberately targeted the Aramco refinery with a drone. The Saudi Energy Ministry verified the incident but did not immediately confirm that it was caused by a drone attack \u2014 a distinction that remains essential. At this moment, the Houthi allegation remains a claim from the group itself, while Saudi authorities have confirmed the fire and the emergency response but have not publicly determined its specific cause.',
        'The Jazan refinery is an important piece of Saudi Arabia\u2019s energy infrastructure. Located on the Red Sea coast in southwestern Saudi Arabia, the refinery has the capacity to process roughly 400,000 barrels of crude oil per day, making any incident involving the plant potentially significant \u2014 not only for Saudi Arabia, but also for regional energy security.',
        'The Houthis stated the attack was carried out in reaction to what they characterized as Saudi drone activities over Yemen, claiming that its forces successfully targeted the Jazan refinery. The declaration occurred against the backdrop of rapidly escalating tensions across the Middle East, where drones and missiles have increasingly become tools for striking key infrastructure.',
        'Saudi Arabia has faced Houthi missile and drone threats previously. The group has previously claimed assaults against Saudi energy facilities, and Saudi Arabia has regularly bolstered fortifications around critical oil sites, ports and other vital infrastructure. The new incident is being closely examined because of the position of the target \u2014 Jazan lies quite close to Yemen, making the region particularly sensitive to events in the conflict.',
        'The immediate damage from Sunday\u2019s incident appears minor. Firefighters managed to extinguish the blaze, and authorities have reported no casualties. There has also been no verifiable indication thus far that the event caused a large halt to Saudi Arabia\u2019s overall oil production. But the strategic significance of the event goes beyond the extent of the fire.',
        'Oil refineries are complex industrial structures involving extremely sensitive processing equipment, pipelines, storage systems and other infrastructure. Even a relatively tiny occurrence can prompt operators to conduct inspections, temporarily restrict operations or boost security measures \u2014 which is why international energy markets pay close attention to any attack, or perceived attack, against Saudi oil infrastructure.',
        'The timing is also critical. Saudi Arabia has recently been attempting to enhance its regional security posture as tensions involving Iran, Yemen and other Middle Eastern actors continue to grow. Just days before the Jazan incident, Saudi Arabia, Turkey and Pakistan unveiled a new defense deal aimed at boosting mutual security cooperation, meaning any strike on Saudi territory could carry greater political ramifications.',
        'The major danger now is escalation. If the Jazan incident remains isolated, the implications may be very limited. But if more assaults target Saudi oil installations, ports or other strategic infrastructure, pressure on Riyadh to retaliate could intensify, potentially provoking further military action and escalating the regional crisis.',
        'The most important comparison remains 2019, when attacks on Saudi Aramco facilities briefly halted a big chunk of Saudi oil output and generated major worry throughout global energy markets. The recent Jazan incident appears substantially smaller based on the evidence available thus far: there are no reported deaths, the fire has been doused, and no severe production impact has been established.',
        'For Saudi Arabia, the first focus will be understanding exactly what happened and ensuring that the facility remains secure. For the Houthis, the purported operation conveys a political and military message that Saudi energy infrastructure remains within their potential reach. The investigation into what caused the fire \u2014 and whether the Houthis were responsible \u2014 could become increasingly significant as tensions across the Middle East continue to rise.'
      ]
    },
    {
      id: 'bulgaria-drone-explosion',
      title: 'Drone Crosses Into Bulgarian Airspace and Explodes Near Romania Border',
      category: 'Security',
      region: 'Europe',
      date: '2026-08-09',
      dateline: 'SOFIA',
      image: 'https://i.ibb.co/v6f9p3Br/Drone-explosion-near-border-inve-202608091507.jpg',
      imageAlt: 'Investigators examining a field near the Bulgaria-Romania border after a drone explosion',
      excerpt: 'An unmanned aircraft entered Bulgarian airspace and exploded in a sunflower field near the Romanian border, close to a compressor station on the Trans-Balkan gas pipeline, raising fresh concerns about drone risks around the Black Sea.',
      featured: true,
      tags: ['Bulgaria', 'Romania', 'drone', 'NATO', 'Black Sea', 'Trans-Balkan pipeline', 'air defense'],
      content: [
        'Bulgaria is investigating a drone incident near its border with Romania after an unmanned aircraft entered Bulgarian airspace and exploded in a field, raising fresh concerns about the growing risk posed by drones operating around the Black Sea region.',
        'The event happened on Saturday morning near the former Kardam border crossing in northern Bulgaria. According to Bulgarian authorities, the drone approached from the direction of Romania before crossing into Bulgarian territory and exploding in a sunflower field. Fortunately, there were no reported injuries, and authorities confirmed that no critical infrastructure was harmed.',
        'But the site of the explosion quickly garnered attention: the location was apparently located around one kilometer from a compressor station connected to the Trans-Balkan gas pipeline, part of strategically vital energy infrastructure serving the region. The event sparked questions about how vulnerable critical infrastructure could be if a similar drone were to reach a more sensitive target.',
        'Bulgarian border police, police units and defense forces moved into the region following the explosion. Investigators secured the scene and began studying components of the aircraft in an effort to identify its origin, flight path and likely mission.',
        'One of the most worrying elements is that the drone was apparently not identified by Bulgarian or Romanian air-defense surveillance systems before the explosion, prompting doubts about existing radar coverage along the border and the difficulties of detecting small, low-flying unmanned aircraft. Small drones can be particularly challenging for traditional air-defense systems to identify since, unlike major military aircraft or missiles, many have a relatively modest radar signature and may fly at low altitudes.',
        'The incident comes as Bulgaria and Romania continue to face increased security worries due to the crisis in Ukraine. Both nations are NATO members located near the Black Sea region, where drone and missile activity has escalated considerably since Russia\u2019s full-scale invasion of Ukraine. Romania has already reported many incidents with drones entering or approaching its airspace, some along the country\u2019s border with Ukraine.',
        'However, officials have not established that Bulgaria was purposefully targeted. Initial evaluations apparently revealed that the aircraft could have been a Maya-type decoy drone affiliated with Ukrainian military, though identifying the type of drone does not automatically establish who launched it or why it entered Bulgarian airspace. Investigators must still ascertain if the drone lost navigation, malfunctioned, was influenced by electromagnetic interference, or was purposely diverted.',
        'For now, Bulgarian authorities are treating the incident as a security probe rather than labeling it as an intentional attack. The absence of victims and severe infrastructure damage has prevented the occurrence from becoming a major disaster, but the proximity to energy infrastructure highlights the potential ramifications of similar incidents in the future.',
        'This is why counter-drone technology has become an increasingly crucial part of European security planning, with governments around the region investing in upgraded radar systems, electronic warfare equipment, drone monitoring networks and other detection technologies. A smart air-defense missile can cost substantially more than the drone it is supposed to destroy, yet allowing an unidentified drone to proceed toward a sensitive target presents intolerable dangers.',
        'For Bulgaria, the incident could lead to extra security measures around border regions and strategically critical infrastructure. Investigators will now focus on reconstructing the drone\u2019s final flight path, and authorities may also analyze radar and surveillance information from Bulgaria and Romania in an attempt to establish why the aircraft was not identified earlier.',
        'As drone warfare continues to grow, the border between a faraway battle and a direct security event on NATO territory can become increasingly difficult to define \u2014 a fact that is increasingly impossible for Bulgaria, Romania and other nations along NATO\u2019s eastern flank to ignore.'
      ]
    },
    {
      id: 'typhoon-dolphin-china',
      title: 'China Braces for Typhoon Dolphin as Powerful Storm Approaches Eastern Coast',
      category: 'Weather',
      region: 'Asia',
      date: '2026-08-09',
      dateline: 'BEIJING',
      image: 'https://i.ibb.co/4g5GkDWV/Typhoon-approaching-coastal-city-202608091512.jpg',
      imageAlt: 'A typhoon approaching a coastal Chinese city with dark storm clouds over the skyline',
      excerpt: 'More than one million people have been evacuated and over 1,300 flights canceled in Shanghai as Typhoon Dolphin, packing winds near 160 km/h, bears down on China\u2019s densely populated eastern coast after battering Japan and Taiwan.',
      featured: true,
      tags: ['typhoon', 'China', 'Shanghai', 'evacuation', 'flooding', 'Zhejiang', 'Japan', 'Taiwan'],
      content: [
        'China is bracing for the arrival of Typhoon Dolphin, a severe tropical storm approaching the country\u2019s highly populated eastern shore. Authorities have initiated large-scale emergency preparations as the storm threatens to bring catastrophic winds, torrential rainfall, flooding and landslides to numerous sections of eastern China.',
        'The typhoon has already caused severe disruption in areas of Japan and Taiwan before advancing near mainland China. Officials are particularly concerned about the storm\u2019s possible impact on coastal communities, transportation networks and essential infrastructure.',
        'Forecasts indicate that the storm might bring exceptionally severe winds, with some locations suffering persistent winds of about 160 kilometers per hour. But wind is not expected to be the only severe risk: meteorologists are warning that the storm might dump hundreds of millimeters of rain across sections of Zhejiang, Shanghai and adjacent areas, with some regions potentially experiencing rainfall approaching 500 millimeters. Such intense rainfall might overwhelm drainage systems, swiftly boost river levels and trigger deadly flooding, while mountainous locations could see a heightened danger of landslides and mudslides.',
        'The scale of China\u2019s preparations underlines the seriousness of the situation. More than one million people have been evacuated to safer locations in areas vulnerable to the coming storm, with large-scale evacuations taking place in Zhejiang and Fujian provinces. In Wenzhou alone, hundreds of thousands of citizens were shifted away from locations considered particularly vulnerable to flooding and severe winds, and Shanghai has also begun precautionary evacuations in susceptible locations.',
        'One of the most noticeable repercussions of Typhoon Dolphin is the interruption to China\u2019s transportation system. Shanghai, one of Asia\u2019s main aviation and commercial hubs, has witnessed extensive flight disruptions, with more than 1,300 flights reportedly canceled at Shanghai\u2019s major airports as airlines brace for dangerous weather conditions, affecting both domestic and international travelers.',
        'Authorities have also made precautions to restrict the number of individuals exposed to risky conditions near the coast. Ferry services have been suspended in affected locations, and some construction projects and outdoor operations have also been halted. Coastal areas are prepared for huge waves, storm-force winds and heavy rainfall, and officials are constantly watching rivers and streams since prolonged rainfall might cause flood levels to rise significantly.',
        'China is not the only country to feel the consequences of Typhoon Dolphin. Before approaching mainland China, the storm damaged sections of southern Japan, particularly the Okinawa region, delivering strong gusts and heavy rain that led to flight cancellations, brief airport disruptions and power outages, with several people suffering minor injuries. Taiwan has also seen significant rainfall and dangerous weather conditions, with authorities encouraging vessels operating around the Taiwan Strait to take proper precautions.',
        'Although high winds normally attract the most attention during a typhoon, flooding could ultimately become one of the most catastrophic risks posed by Dolphin. Some places might receive between 200 and 400 millimeters of rain, with isolated locations potentially receiving much greater totals \u2014 enough to cause urban flooding, drowned roadways and unstable, saturated soil in mountainous areas.',
        'One of the main issues facing authorities is that the danger will not necessarily end when Typhoon Dolphin reaches land. The storm is forecast to decrease after moving inland, but weakening winds do not automatically indicate the threat has passed, since a tropical system can continue bringing tremendous amounts of moisture long after its strongest winds disappear.',
        'The evacuation of more than one million people, extensive airline cancellations, suspension of maritime transit and preparations for flooding indicate the severity of the response, and the storm is becoming a serious test of China\u2019s disaster-preparedness and emergency-response mechanisms. Typhoon Dolphin may weaken after striking land \u2014 but for millions throughout eastern China, the risk might remain long after the storm itself passes inland.'
      ]
    },
    {
      id: 'thailand-school-shooting',
      title: 'Thailand School Shooting: Death Toll Rises to Nine',
      category: 'World',
      region: 'Asia',
      date: '2026-08-09',
      dateline: 'BANGKOK',
      image: 'https://i.ibb.co/WvjgLMpX/Emergency-responders-at-school-s-202608091526.jpg',
      imageAlt: 'Emergency responders gathered outside a school in Nonthaburi, Thailand, after a shooting',
      excerpt: 'The death toll from a shooting at Debsirin Nonthaburi School near Bangkok has risen to nine after a 12-year-old girl died of her injuries. A 14-year-old student allegedly carried out the attack before killing himself.',
      featured: false,
      tags: ['Thailand', 'school shooting', 'Bangkok', 'gun control', 'Nonthaburi'],
      content: [
        'Thailand is mourning after a deadly school shooting in Nonthaburi province, near Bangkok, left nine people dead and more than 30 others injured. The death toll climbed after a 12-year-old girl, who had been badly wounded during the incident, died in hospital.',
        'The incident took place on Friday at Debsirin Nonthaburi School, northwest of Bangkok. Authorities believe the attack was carried out by a 14-year-old student, who later died after turning the gun on himself. The incident has stunned Thailand and sparked a national debate regarding gun ownership, school security, mental-health care and the warning signs that can precede teenage violence.',
        'According to authorities, the violence began earlier in the morning at the teenager\u2019s family home. Police said the 14-year-old shot and killed his two grandparents before leaving the residence and heading toward his school. He then arrived at Debsirin Nonthaburi School, where hundreds of pupils and staff were gathered, and shortly before 10 a.m. shooting erupted inside the school. Five school staff members were among those killed during the attack before the teenager turned the firearm on himself.',
        'As the incident proceeded, students urgently searched for places to hide. Some barricaded themselves inside classrooms, cut off the lights, blocked doors and strove to be utterly silent, contacting their parents by phone as they waited for authorities to secure the school. Parents gathered near the school, urgently seeking information on their children.',
        'The initial death toll was lower, but as badly injured victims were treated in hospitals, the number of fatalities rose. A 12-year-old girl who had suffered critical injuries during the shooting eventually died in hospital, bringing the overall number of victims to nine. The dead included the teenager\u2019s two grandparents and several members of the school staff, while numerous children and other people were injured, some remaining in critical condition.',
        'One of the most critical topics coming from the investigation surrounds how the adolescent obtained the handgun. Authorities said the weapon used in the incident was properly registered to his grandfather, and investigators are now exploring how the teenager acquired access to the firearm and whether it had been securely stored within the family home. The case has revived concerns about firearm storage and the possibility of children obtaining weapons belonging to adults.',
        'Investigators are also analyzing the teenager\u2019s behavior before the crime. Police say he had displayed an interest in firearms for some time, had watched violent content online, and had used social media to learn about weaponry. A BB gun had apparently been confiscated from him by a teacher in the past. These details have raised questions about whether there were warning indicators that may have been identified earlier, though authorities have not determined one specific motivation for the attack. School-related stress is one of several possible contributing factors being examined, alongside the teenager\u2019s family circumstances and online behavior.',
        'The tragedy has rekindled a national discussion over firearms in Thailand, which has one of the highest civilian gun-ownership rates in Southeast Asia. The country has experienced other severe mass-casualty shootings in recent years, including a 2022 attack on a childcare center in northeastern Thailand that killed dozens, many of them young children, and a 2020 rampage at Nakhon Ratchasima that killed 29 people.',
        'Following the shooting, Thailand\u2019s government has committed to enhancing procedures aimed at preventing such tragedies, including greater mental-health screening, emergency-response training, anti-bullying programs and improved systems for identifying dangerous items before they enter school grounds. The school has temporarily suspended classes and moved to remote learning as the community begins processing the emotional aftermath of the attack.',
        'Police are continuing to examine the circumstances surrounding the attack, reviewing the firearm, ammunition and other evidence found at the scene, questioning witnesses, and evaluating digital evidence regarding the teenager\u2019s actions before the shooting. The tragedy is already being described as one of Thailand\u2019s most devastating mass-casualty attacks in recent years, leaving the country to confront difficult questions about firearm access, warning signs and school safety.'
      ]
    },
    {
      id: 'colombia-toll-plaza-bombing',
      title: 'Colombia: Car Bomb Attack Follows New President\u2019s Inauguration',
      category: 'Security',
      region: 'Americas',
      date: '2026-08-09',
      dateline: 'BOGOT\u00c1',
      image: 'https://i.ibb.co/SHTkKt6/Security-forces-investigating-hi-202608091530.jpg',
      imageAlt: 'Security forces investigating the site of a car bomb attack at a highway toll plaza in Colombia',
      excerpt: 'A car bomb destroyed a toll plaza on the Pan-American Highway in Cauca, injuring two security officers, less than 24 hours after President Abelardo de la Espriella was sworn into office pledging a harder stance against armed groups.',
      featured: false,
      tags: ['Colombia', 'car bomb', 'Cauca', 'FARC dissidents', 'de la Espriella', 'Pan-American Highway'],
      content: [
        'Colombia is facing a serious security dilemma just one day after its new president took office. A car bomb exploded at a toll plaza in southwestern Colombia, injuring two security personnel and destroying the facility. The attack took place in Cauca department, near the strategically crucial Pan-American Highway.',
        'What makes the incident particularly relevant is its timing. The explosion happened less than 24 hours after President Abelardo de la Espriella was sworn into office. The incoming president campaigned on a promise to take a far harder stance toward Colombia\u2019s armed groups, drug traffickers and criminal organizations \u2014 and now his government is facing an immediate test.',
        'According to Colombian authorities, a vehicle had been abandoned near the toll facility, and a man reportedly departed the scene on a motorcycle before the truck exploded. The blast caused considerable damage to the toll infrastructure, and two security officers suffered minor injuries. Emergency crews and soldiers were swiftly deployed to protect the area, and authorities brought in bomb-disposal specialists and trained detection dogs to search for any additional explosive devices.',
        'The explosion was big enough to damage parts of the toll facility and disperse debris across the surrounding area, with residents in adjacent villages reportedly hearing the detonation. The bombing also interrupted traffic along one of the most vital routes in southwestern Colombia, a corridor connecting villages and economic hubs across the region, meaning any extended closure could have economic ramifications for local households and companies.',
        'During his inauguration speech, held symbolically in Cali rather than Bogot\u00e1, the new president declared national security one of the key focuses of his government, warning armed groups that his administration would address them directly and asking that illegal organizations submit to the authority of the Colombian state. The car bombing constitutes an early test of that promise, underscoring the gravity of the security problem confronting the president from the very beginning of his term.',
        'Colombian military authorities have attributed the attack to dissident factions that originated from the former FARC rebel organization. The original FARC group struck a historic peace agreement with the Colombian government in 2016 and fully demobilized, but not every member accepted the deal, and several dissident factions remained armed and continue operating in parts of Colombia, involved in drug trafficking, territorial disputes and other criminal activities.',
        'The attack occurred in Cauca, one of Colombia\u2019s most violent departments, where armed organizations have long battled for control over territory and illegal economic activity. The region\u2019s mountainous, forested terrain makes it difficult for security forces to maintain complete control, and the Pan-American Highway\u2019s importance as a transportation corridor means attacking infrastructure along the route can induce panic and disruption far beyond the immediate area.',
        'The new administration has harshly condemned the bombing and vowed that armed organizations will not be permitted to harass civilians or harm Colombia\u2019s transportation infrastructure. The government is expected to escalate military and police operations in areas where armed groups maintain a major presence, favoring a posture of military pressure and restoration of state control over the previous administration\u2019s approach of negotiating with multiple armed groups.',
        'Despite the severity of the explosion, the immediate human toll was limited to two injured security guards, with no reports of civilian casualties. Investigators are continuing to analyze the remnants of the vehicle, search the surrounding area for clues, and attempt to identify the man who reportedly abandoned the vehicle before fleeing on a motorcycle, while also working to determine whether the toll plaza was the intended target or whether the attack was designed to generate broader disruption and anxiety along the highway.'
      ]
    },
    {
      id: 'bc-wildfire-state-of-emergency',
      title: 'British Columbia Declares State of Emergency as Wildfires Force More Than 20,000 to Flee',
      category: 'Weather',
      region: 'Americas',
      date: '2026-08-09',
      dateline: 'BRITISH COLUMBIA',
      image: 'https://i.ibb.co/nh5SLF6/Wildfire-consuming-hills-with-fi-202608090503.jpg',
      imageAlt: 'Wildfire consuming hillsides near a British Columbia community with firefighting crews responding',
      excerpt: 'The fast-moving Bald Range fire has forced more than 20,000 people from the Okanagan communities of Summerland and Peachland to flee, prompting a provincial state of emergency, home losses and disruptions to power and drinking water.',
      featured: false,
      tags: ['British Columbia', 'wildfire', 'Okanagan', 'evacuation', 'Canada', 'state of emergency'],
      content: [
        'British Columbia is facing a rapidly expanding wildfire emergency after a major blaze in the province\u2019s southern Interior forced more than 20,000 people to abandon their homes. The situation became particularly severe around the Okanagan communities of Summerland and Peachland, where the fast-moving wildfire surged quickly and threatened homes, businesses and key infrastructure.',
        'Provincial authorities declared a state of emergency as firefighters tried to contain the flames and thousands of residents scrambled for safe places to stay. The wildfire has already burned homes and other structures, while power outages and disruptions to the local water system have added another degree of difficulty for communities dealing with the evacuation.',
        'The wildfire, known as the Bald Range fire, moved fast across dry forest and grassland in the Okanagan region. Strong winds propelled flames through vegetation, while severe heat caused tremendous columns of smoke to tower high above the surrounding terrain. Officials warned that the fire was capable of shifting direction and spreading swiftly, leaving communities with little time to prepare. More than 20,000 individuals were affected by evacuation orders and warnings as authorities worked to move residents away from locations considered unsafe, with some families forced to escape during the night as smoke filled surrounding neighborhoods and flames reached residential areas.',
        'The provincial government\u2019s declaration of a state of emergency empowers authorities to organize resources more efficiently and take further precautions to protect residents and key infrastructure. Emergency teams, firefighters, police officers and other organizations have been working closely to coordinate evacuations and keep citizens away from risky areas, illustrating that this is no longer a problem impacting a single neighborhood or town.',
        'One of the most destructive results of the wildfire has been the destruction of homes and other buildings. For residents who have been evacuated, anxiety persists over what they will discover when they are eventually allowed to return, with some families likely to find their homes intact while others face the harsh reality of losing everything.',
        'The wildfire situation has also impacted essential services. In Summerland, residents were warned to take precautions with drinking water after untreated water infiltrated the municipal system, compounding the challenges facing families already displaced by fire. Emergency shelters and surrounding communities must now deal with the requirements of thousands of people who suddenly demand accommodation, food, water and other necessary supplies.',
        'Roads have become one of the most crucial parts of the evacuation effort, with thousands of residents leaving endangered areas creating heavy traffic and putting great pressure on the region\u2019s transportation network. Some routes and highways have been closed because of the spreading fire, smoke or emergency operations, and authorities have continued to monitor transportation routes closely while issuing evacuation orders and alerts.',
        'The Okanagan region, known for its lakes, vineyards, orchards and mountain scenery, can also generate catastrophic wildfire conditions during periods of severe heat and drought given its combination of forests, parched vegetation and hilly terrain. Once a major fire begins moving over dry vegetation, steep slopes can speed its spread, and wind can move embers ahead of the main fire, potentially sparking new fires far from the initial flames.',
        'One of the most worrying qualities of exceptionally large wildfires is their capacity to generate their own weather. When enormous volumes of heat rise from a fire, they can cause tremendous upward air currents that form towering smoke columns and produce erratic wind behavior around the fire, making firefighting incredibly difficult as the fire can abruptly speed up, shift course or produce new areas of severe burning.',
        'The disaster in British Columbia is part of a much wider wildfire crisis affecting Canada this season, with millions of hectares already burned nationwide, imposing massive demands on firefighting resources. British Columbia has been coping with many active fires simultaneously, meaning staff and equipment must be carefully dispersed between different emergencies, with firefighters from outside the province and international allies also being sent in when local resources become overwhelmed.',
        'For the more than 20,000 people affected by evacuation orders and advisories, the immediate priority is safety. But once the flames are under control, another challenge will begin, as displaced residents decide whether their homes are still standing, whether their communities remain habitable, and when they will be allowed to return \u2014 with those whose homes have been damaged facing a longer path involving insurance claims, temporary lodging, rebuilding and emotional recovery.'
      ]
    },
    {
      id: 'mecca-defense-pact',
      title: 'Saudi Arabia, Pakistan and T\u00fcrkiye Sign Major Mutual-Defense Pact',
      category: 'Politics',
      region: 'Middle East',
      date: '2026-08-09',
      dateline: 'MECCA',
      image: 'https://i.ibb.co/d0zWHzVk/Leaders-signing-international-de-202608090506.jpg',
      imageAlt: 'Leaders of Saudi Arabia, Pakistan and T\u00fcrkiye signing an international defense agreement in Mecca',
      excerpt: 'Saudi Crown Prince Mohammed bin Salman, Turkish President Recep Tayyip Erdo\u011fan and Pakistani Prime Minister Shehbaz Sharif have signed the Mecca Joint Defence Agreement, a NATO-style collective-defense pact among three of the Muslim world\u2019s most militarily significant states.',
      featured: false,
      tags: ['Saudi Arabia', 'Pakistan', 'T\u00fcrkiye', 'defense pact', 'Mecca', 'collective security', 'MBS', 'Erdo\u011fan'],
      content: [
        'Saudi Arabia, Pakistan and T\u00fcrkiye have signed a new trilateral mutual-defense agreement in Mecca, creating a substantial new security arrangement integrating three of the most militarily important countries in the Muslim world. The agreement, known as the Mecca Joint Defence Agreement, creates a collective-defense framework under which an armed attack against any one of the three signatories will be viewed as an attack against all three.',
        'The agreement was signed in Mecca on Friday by Saudi Crown Prince and Prime Minister Mohammed bin Salman, Turkish President Recep Tayyip Erdo\u011fan, and Pakistani Prime Minister Shehbaz Sharif. The news comes at a moment of tremendous military and political tension across the Middle East, giving the new alliance immediate regional significance.',
        'At the crux of the deal is a straightforward but potentially far-reaching commitment: the three countries have promised to respond jointly if one of them comes under military attack. Turkish Foreign Minister Hakan Fidan said the system is theoretically comparable to Article 5 of the NATO treaty, though the resemblance does not mean the new setup is actually NATO or that the three countries have formed an identical military structure. The pact\u2019s significance comes from the combined military capabilities, geographic positioning and political power of its three members: Pakistan brings one of the region\u2019s largest standing militaries and is a nuclear-armed state; T\u00fcrkiye is a NATO member with a vast and growing defense sector including major drone, missile, naval and aerospace capabilities; and Saudi Arabia is one of the Middle East\u2019s top military spenders occupying a strategically crucial position around the Persian Gulf and Red Sea.',
        'The location of the signing holds great symbolic significance, as Mecca is Islam\u2019s holiest city and carries great religious importance for Saudi Arabia and the global Muslim world. The deal also reflects years of increased military collaboration between the three countries: Pakistan and Saudi Arabia previously signed a bilateral Strategic Mutual Defence Agreement in 2025, and the new trilateral agreement deepens the security partnership by formally integrating T\u00fcrkiye into the arrangement.',
        'The announcement instantly aroused speculation about which countries would be affected by the new security arrangement, with regional concerns involving Iran particularly crucial given heightened hostility and missile threats involving Gulf states. But Turkish Foreign Minister Hakan Fidan emphasized that the accord is not aimed at Iran or any specific country, with the three nations framing the pact as a defensive mechanism intended to increase deterrence and preserve their security interests.',
        'For Saudi Arabia, the pact offers another layer of protection at a time when the kingdom faces a challenging regional environment, bordering countries afflicted by conflicts and instability while its oil infrastructure, ports and large cities remain strategically significant. For Pakistan, the pact enhances its historic military and political connection with Saudi Arabia while extending its strategic partnership with T\u00fcrkiye, building on already close collaboration in defense production, military training and technology between Ankara and Islamabad.',
        'T\u00fcrkiye\u2019s participation is particularly crucial because the country has built a substantial indigenous military sector over the past decade, with Turkish firms becoming globally known for unmanned aerial systems, naval platforms, armored vehicles, missiles and other military technologies. Its position as a NATO member at the junction of Europe, the Middle East, the Caucasus and the Black Sea gives Ankara tremendous geopolitical power, providing the new accord with reach that a strictly Gulf-based arrangement would not have.',
        'The new pact may not necessarily remain confined to three countries. Turkish officials have hinted that other countries could potentially become engaged in the future, with Egypt considered as a possible future participant, though expanding an alliance encompassing countries with varied foreign-policy priorities would be substantially more challenging than preserving the current three-member system.',
        'One of the main questions surrounding the treaty is how much of a formal military cooperation it will truly become. Signing a mutual-defense agreement is one thing; creating permanent combined military commands, integrated air-defense systems, shared information networks and coordinated operational planning would be something far more substantial. For now, the agreement appears to establish the political premise of collective defense while leaving many implementation issues to be negotiated, with a ministerial committee and a Saudi-based general secretariat expected to monitor implementation.',
        'The comparison with NATO\u2019s Article 5 has drawn considerable notice, given its role as one of the most essential elements in modern collective security and its powerful deterrence effect. But there is a crucial distinction: the NATO system includes decades of institutional development, integrated military planning, established command structures and considerable interoperability among member states, while the Saudi-Pakistan-T\u00fcrkiye pact is brand new. Its eventual success will rely on how the three governments translate the political commitment into military strategy and practical measures.',
        'The new alliance arrives during a period of substantial shift in Middle Eastern security politics, as regional governments increasingly seek greater strategic autonomy and diversify partnerships with countries such as China, Russia, T\u00fcrkiye and Pakistan while maintaining ties with the United States. Whether the Mecca Joint Defence Agreement eventually becomes a fully integrated military alliance or remains simply a political deterrent tool will depend on what happens next \u2014 the formation of collaborative planning processes, military exercises, intelligence collaboration, defense-industry links and clearly defined protocols for responding to an actual attack.'
      ]
    },
    {
      id: 'ukraine-interceptor-shortage',
      title: 'Ukraine Faces Growing Air-Defense Interceptor Shortage',
      category: 'Security',
      region: 'Europe',
      date: '2026-08-09',
      dateline: 'KYIV',
      image: 'https://i.ibb.co/bMPRjZdd/Personnel-operating-air-defense-202608090511.jpg',
      imageAlt: 'Personnel operating an air-defense system in Ukraine tracking incoming aerial threats',
      excerpt: 'President Volodymyr Zelenskyy says deliveries of air-defense interceptors have fallen to roughly a third of last year\u2019s level, as Ukraine intercepted only 29 of 195 Russian ballistic missiles in July amid growing global demand for Patriot systems.',
      featured: false,
      tags: ['Ukraine', 'air defense', 'Patriot', 'Zelenskyy', 'Russia', 'ballistic missiles', 'interceptors'],
      content: [
        'Ukraine is facing an increasingly acute shortage of air-defense interceptor missiles as Russia continues launching large-scale missile and drone assaults against Ukrainian towns and crucial infrastructure. Ukrainian President Volodymyr Zelenskyy has indicated that deliveries of air-defense interceptors from partner countries have plummeted to around one-third of last year\u2019s level, prompting rising concern about Ukraine\u2019s capacity to protect its population from Russia\u2019s most destructive weapons.',
        'The scarcity is particularly significant for advanced interceptors used by systems such as the American-made Patriot, among the few Ukrainian defenses capable of countering some of Russia\u2019s most sophisticated ballistic missiles. As Russia continues increasing the scale of its attacks, Ukraine is being pushed to make tougher decisions about where its limited air-defense ammunition should be used.',
        'Russia has continued utilizing a combination of ballistic missiles, cruise missiles and drones in attacks across Ukraine, creating a severe challenge for air-defense commanders. Drones can often be intercepted using relatively inexpensive equipment such as electronic warfare, anti-aircraft artillery and interceptor drones, but ballistic missiles represent a distinct challenge, flying at extremely high speeds along trajectories that make them particularly difficult to intercept. During a significant Russian offensive earlier this month, Ukrainian authorities said Russia launched 24 ballistic missiles and four Zircon cruise missiles alongside more than 100 drones; Ukraine reported destroying most of the drones but was unable to intercept the ballistic missiles in that particular attack.',
        'The American Patriot system has become one of the most essential elements of Ukraine\u2019s air-defense network, combining powerful radar, sophisticated command systems and highly capable interceptor missiles. Ukraine has frequently requested additional Patriot batteries and interceptor missiles from its foreign partners, but the supply problem is not easy to address since Patriot interceptors are complex weapons requiring modern production facilities and specialized components that cannot simply be scaled up overnight.',
        'The scale of the shortfall has become increasingly obvious this year. Zelenskyy has indicated Ukraine received just roughly a third as many air-defense interceptors from its partners in 2026 as during the same period in 2025. Every interceptor used against an approaching missile decreases the remaining stockpile, forcing Ukrainian commanders to weigh which threats demand the use of costly high-end missiles and which can be addressed using simpler defensive tactics \u2014 a difficulty that becomes especially acute when Russia launches combined attacks involving drones, cruise missiles, ballistic missiles and decoys simultaneously.',
        'Another factor exacerbating Ukraine\u2019s dilemma is the rising demand for air-defense weapons overseas, with advanced American interceptors frequently deployed during hostilities and military activities in the Middle East, placing extra strain on worldwide stocks of systems such as Patriot and THAAD. This creates a difficult balancing act for Washington and other Western nations, which must simultaneously maintain their own stocks, support allies in the Middle East, and supply Ukraine with enough weaponry to defend itself against Russia.',
        'Russia appears to understand the importance of Ukraine\u2019s air-defense deficiency. Large missile and drone attacks can force Ukraine to deploy precious interceptors even when individual weapons are comparatively inexpensive, and a Russian drone can be substantially cheaper to produce than the missile used to destroy it \u2014 meaning Ukraine cannot rely primarily on pricey surface-to-air missiles for every approaching threat without risking exhausting its most valuable ammunition, potentially allowing Russia to overwhelm remaining defenses by increasing the quantity of weapons launched at once.',
        'Recent Ukrainian figures illustrate the scale of the problem: during July, Ukraine reportedly intercepted only 29 of 195 Russian ballistic missiles, while destroying a substantially larger proportion of approaching drones. The distinction is crucial because ballistic missiles represent some of the greatest risks to large Ukrainian cities and essential infrastructure, and a high interception rate against drones cannot compensate for a shortage of defenses capable of stopping ballistic missiles.',
        'Ukraine is not dependent entirely on Western missile deliveries. The government has swiftly built its domestic drone industry and is developing interceptor drones designed to neutralize incoming Russian drones at a fraction of the cost of a multimillion-dollar missile, though these systems cannot replace Patriot missiles when the impending threat is a high-speed ballistic missile. Ukraine and European defense firms are also working on longer-term solutions, including a project known as Freyja aimed at establishing a European anti-ballistic missile-defense capability, though this project remains under construction and cannot alleviate Ukraine\u2019s current interceptor shortfall.',
        'The United States and its allies are aware of the problem and are striving to enhance output, with major defense firms obtaining contracts designed to boost manufacturing of Patriot interceptor missiles and related components. But developing a sophisticated defense-industrial base takes time \u2014 factories need new equipment, supply chains need greater capacity, skilled personnel must be trained, and production lines need to be tested before they can run at maximum output, meaning there could be a substantial gap between today\u2019s shortage and tomorrow\u2019s higher production.',
        'Air-defense shortfalls have severe consequences for civilians. When air-defense coverage is strong, incoming weapons can be intercepted before reaching their targets; when defenses are stretched thin, more missiles and drones can get through, damaging homes and civilian infrastructure. With Ukraine\u2019s electricity infrastructure remaining extremely vulnerable heading into another winter, air defense is not an abstract military concern but one of the most critical variables determining whether millions of Ukrainians can safely live and work in their cities.'
      ]
    },
    {
      id: 'colombia-new-security-crisis',
      title: 'Colombia Faces a New Security Crisis Under President Abelardo de la Espriella',
      category: 'Politics',
      region: 'Americas',
      date: '2026-08-09',
      dateline: 'BOGOT\u00c1',
      image: 'https://i.ibb.co/d0yYx7z6/Security-forces-responding-to-bo-202608090516.jpg',
      imageAlt: 'Security forces responding to a bombing site in southwestern Colombia',
      excerpt: 'President Abelardo de la Espriella took office pledging a hardline reversal of Gustavo Petro\u2019s \u201cTotal Peace\u201d strategy, backed by roughly $1 billion in U.S. security assistance, but a car bombing hours into his term shows how entrenched Colombia\u2019s armed groups remain.',
      featured: false,
      tags: ['Colombia', 'de la Espriella', 'FARC dissidents', 'ELN', 'Clan del Golfo', 'Cauca', 'United States'],
      content: [
        'Colombia has entered a new political period under President Abelardo de la Espriella, who took office promising to undertake a much stronger campaign against armed groups, drug trafficking and organized crime. But the new president\u2019s security policy faces an immediate test: just one day after his inauguration, a car bomb exploded in southwestern Colombia, demonstrating the enduring power of armed groups and the challenging security climate inherited by the new administration.',
        'De la Espriella\u2019s presidency marks a significant political shift following four years under left-wing President Gustavo Petro, whose government attempted to negotiate with multiple armed organizations as part of its \u201cTotal Peace\u201d agenda. The new president has vowed a different approach, placing military and police operations at the center of his strategy.',
        'De la Espriella was sworn into office on August 7, 2026, following his election victory. His inauguration took place in Cali rather than the traditional location of Bogot\u00e1 \u2014 a choice loaded with symbolism, given that the city and the surrounding Valle del Cauca region have faced major problems involving organized crime, drug trafficking and armed organizations. During his inauguration speech, the new president committed to confronting what he described as Colombia\u2019s growing problem of narco-terrorism, warning that armed organizations refusing to surrender would face a considerably harsher response from the authorities.',
        'The new administration received an immediate reminder of the gravity of the challenge on August 8, when a car bomb exploded near a toll facility on the Pan-American Highway in southwestern Colombia, destroying the surrounding area and injuring security officers. Colombian police linked the attack to dissident sections of the former FARC insurgent organization, and the tragedy\u2019s timing \u2014 barely hours after De la Espriella had promised to restore security \u2014 made it particularly significant, revealing that armed groups remain capable of hitting vital infrastructure even as the new government vows a stronger response.',
        'The southwestern part of Colombia, encompassing portions of Cauca and Valle del Cauca, has long been one of the country\u2019s most problematic security settings, where many armed and criminal organizations compete for control. The location is strategically important because major roadways connect it to other parts of the country, and it is closely associated with coca growing and drug-trafficking routes.',
        'One of the major issues facing the administration is that Colombia\u2019s security crisis is not controlled by a single group. FARC dissident organizations remain active despite rejecting the historic 2016 peace accord; the Clan del Golfo has become one of the country\u2019s most powerful criminal organizations, heavily involved in drug trafficking; and the ELN, or National Liberation Army, also remains a major armed actor. These organizations differ in structure, purpose and territorial presence, making it difficult for the government to develop a single policy that can address all of them.',
        'At the heart of Colombia\u2019s security dilemma is the immense profitability of the global cocaine trade, which allows armed groups to buy weapons, recruit fighters and build influence over communities. President De la Espriella\u2019s security plan will therefore need to go beyond confronting armed individuals in rural areas, also addressing the financial systems that keep criminal organizations operating through enhanced financial investigations, asset seizures, international cooperation and pressure on trafficking networks.',
        'The change in government reflects a substantial reversal of Colombia\u2019s recent security policies. Former President Gustavo Petro attempted to negotiate with many armed factions under his \u201cTotal Peace\u201d project in an effort to reduce violence through agreements, but the strategy met serious obstacles as several organizations continued fighting, expanded their territorial dominance or failed to comply with ceasefire arrangements. De la Espriella has argued that negotiated agreements have not brought Colombians the security they need, and his government intends to focus on military pressure and law enforcement instead.',
        'The United States is likely to become a major partner for Colombia\u2019s incoming government, with Washington pledging around $1 billion in security assistance designed to bolster efforts against drug trafficking and organized crime. The relationship between Bogot\u00e1 and Washington is also likely to deepen because De la Espriella has openly positioned himself as a close ally of U.S. President Donald Trump, potentially giving Colombia more resources for intelligence, military operations, counter-narcotics initiatives and law enforcement.',
        'De la Espriella has made clear that Colombia\u2019s armed forces will play a prominent role in his security strategy, visiting a military installation and addressing members of the armed services immediately after taking office. The challenge will be making military operations effective while protecting civilians, given Colombia\u2019s long history of internal armed conflict and the humanitarian consequences that operations against insurgent and criminal groups have sometimes generated.',
        'Colombia\u2019s criminal organizations are also adapting, increasingly incorporating modern technologies including drones and encrypted communications, which can be used to observe security forces and potentially carry explosives. That raises a new challenge for Colombian officials, who will increasingly need counter-drone equipment, stronger intelligence networks and superior surveillance technology across the country\u2019s mountains, forests and remote rural areas.',
        'The major uncertainty surrounding De la Espriella\u2019s strategy is whether a harder stance will minimize violence or provoke an escalation. Armed groups have tremendous financial incentives to protect their territories and criminal enterprises, and the car-bomb attack immediately after the inauguration could be an early indication of the confrontation ahead. The president also faces the opposite risk: if the government does not respond aggressively enough, armed groups could interpret it as weakness. Success will ultimately be measured in everyday terms \u2014 whether Colombians can travel safely, whether businesses can operate without extortion, and whether the government can recover control of territory long held by criminal organizations.'
      ]
    }
  ];

  // Category display metadata (order controls nav / filter order)
  const CATEGORY_META = {
    'World':      { slug: 'world',      class: 'cat-world' },
    'Politics':   { slug: 'politics',   class: 'cat-politics' },
    'Security':   { slug: 'security',   class: 'cat-security' },
    'Weather':    { slug: 'weather',    class: 'cat-weather' },
    'Business':   { slug: 'business',   class: 'cat-business' },
    'Technology': { slug: 'technology', class: 'cat-technology' }
  };

  // Derive the list of categories that actually exist in the dataset, in a sensible order
  const CATEGORY_ORDER = ['World', 'Politics', 'Security', 'Weather', 'Business', 'Technology'];
  const CATEGORIES = CATEGORY_ORDER.filter(cat => ARTICLES.some(a => a.category === cat));

  /* ---------------------------------------------------------
     2. STATE
  --------------------------------------------------------- */
  const state = {
    activeCategory: 'All',
    query: ''
  };

  /* ---------------------------------------------------------
     3. HELPERS
  --------------------------------------------------------- */
  function formatDate(iso) {
    const d = new Date(iso + 'T12:00:00');
    return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  }

  function formatDateShort(iso) {
    const d = new Date(iso + 'T12:00:00');
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }

  function readingTime(article) {
    const words = article.content.join(' ').split(/\s+/).length;
    return Math.max(2, Math.round(words / 200));
  }

  function categoryBadgeClass(category) {
    return (CATEGORY_META[category] && CATEGORY_META[category].class) || 'cat-world';
  }

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, ch => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[ch]));
  }

  // Wrap matches of `query` in <mark> tags (search term highlighting)
  function highlight(text, query) {
    if (!query) return escapeHtml(text);
    const safe = escapeHtml(text);
    const q = query.trim();
    if (!q) return safe;
    try {
      const re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig');
      return safe.replace(re, '<mark>$1</mark>');
    } catch (e) {
      return safe;
    }
  }

  function articleMatchesQuery(article, query) {
    if (!query) return true;
    const q = query.toLowerCase();
    const haystack = [
      article.title,
      article.category,
      article.region,
      article.excerpt,
      article.dateline,
      (article.tags || []).join(' '),
      article.content.join(' ')
    ].join(' ').toLowerCase();
    return haystack.includes(q);
  }

  function getFilteredArticles() {
    return ARTICLES.filter(a => {
      const matchesCategory = state.activeCategory === 'All' || a.category === state.activeCategory;
      const matchesQuery = articleMatchesQuery(a, state.query);
      return matchesCategory && matchesQuery;
    });
  }

  /* ---------------------------------------------------------
     4. RENDER: TICKER
  --------------------------------------------------------- */
  function renderTicker() {
    const track = document.getElementById('tickerTrack');
    const featured = ARTICLES.filter(a => a.featured);
    const items = featured.length ? featured : ARTICLES;
    // duplicate list for seamless infinite scroll
    const doubled = items.concat(items);
    track.innerHTML = doubled.map(a =>
      `<span class="ticker-item" data-id="${a.id}">${escapeHtml(a.title)} \u2014 <em style="font-style:normal;opacity:.85;">${a.dateline}</em></span>`
    ).join('');

    track.querySelectorAll('.ticker-item').forEach(el => {
      el.addEventListener('click', () => openArticle(el.dataset.id));
    });
  }

  /* ---------------------------------------------------------
     5. RENDER: NAV + FOOTER CATEGORY LINKS
  --------------------------------------------------------- */
  function renderNav() {
    const navList = document.getElementById('navList');
    const items = ['All', ...CATEGORIES];
    navList.innerHTML = items.map(cat =>
      `<li><a href="#latestSection" data-cat="${cat}" class="${cat === state.activeCategory ? 'active' : ''}">${cat}</a></li>`
    ).join('');

    navList.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', (e) => {
        setCategory(a.dataset.cat);
        closeMobileNav();
      });
    });

    const footerList = document.getElementById('footerCategoryList');
    footerList.innerHTML = CATEGORIES.map(cat =>
      `<li><a href="#latestSection" data-cat="${cat}">${cat}</a></li>`
    ).join('');
    footerList.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => setCategory(a.dataset.cat));
    });
  }

  function renderFilterBar() {
    const bar = document.getElementById('filterBar');
    const items = ['All', ...CATEGORIES];
    bar.innerHTML = items.map(cat =>
      `<button class="filter-chip ${cat === state.activeCategory ? 'active' : ''}" data-cat="${cat}" role="tab" aria-selected="${cat === state.activeCategory}">${cat}</button>`
    ).join('');
    bar.querySelectorAll('.filter-chip').forEach(btn => {
      btn.addEventListener('click', () => setCategory(btn.dataset.cat));
    });
  }

  function setCategory(cat) {
    state.activeCategory = cat;
    renderNav();
    renderFilterBar();
    renderNewsGrid();
    updateSearchStatus();
  }

  /* ---------------------------------------------------------
     6. RENDER: FEATURED SECTION (lead + secondary)
  --------------------------------------------------------- */
  function renderFeatured() {
    const grid = document.getElementById('featuredGrid');
    const featuredSection = document.getElementById('featuredSection');

    // Only show featured section when not actively searching/filtering
    if (state.query || state.activeCategory !== 'All') {
      featuredSection.style.display = 'none';
      return;
    }
    featuredSection.style.display = '';

    const lead = ARTICLES.find(a => a.lead) || ARTICLES[0];
    const secondary = ARTICLES.filter(a => a.id !== lead.id && a.featured).slice(0, 4);

    grid.innerHTML = `
      <div class="lead-card" data-id="${lead.id}" tabindex="0" role="button" aria-label="Read: ${escapeHtml(lead.title)}">
        <img src="${lead.image}" alt="${escapeHtml(lead.imageAlt)}" loading="lazy">
        <div class="lead-card-body">
          <span class="badge ${categoryBadgeClass(lead.category)}">${lead.category}</span>
          <h1>${escapeHtml(lead.title)}</h1>
          <p class="excerpt">${escapeHtml(lead.excerpt)}</p>
          <div class="meta-row">
            <span>${lead.dateline}</span><span class="dot"></span>
            <span>${formatDate(lead.date)}</span><span class="dot"></span>
            <span>${readingTime(lead)} min read</span>
          </div>
        </div>
      </div>
      <div class="lead-secondary-list">
        ${secondary.map(a => `
          <div class="secondary-card" data-id="${a.id}" tabindex="0" role="button" aria-label="Read: ${escapeHtml(a.title)}">
            <div class="thumb"><img src="${a.image}" alt="${escapeHtml(a.imageAlt)}" loading="lazy"></div>
            <div class="body">
              <span class="badge ${categoryBadgeClass(a.category)}">${a.category}</span>
              <h3>${escapeHtml(a.title)}</h3>
              <div class="meta-row"><span>${a.dateline}</span><span class="dot"></span><span>${formatDateShort(a.date)}</span></div>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    grid.querySelectorAll('[data-id]').forEach(el => {
      el.addEventListener('click', () => openArticle(el.dataset.id));
      el.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openArticle(el.dataset.id); } });
    });
  }

  /* ---------------------------------------------------------
     7. RENDER: LATEST NEWS GRID
  --------------------------------------------------------- */
  function renderNewsGrid() {
    const grid = document.getElementById('newsGrid');
    const noResults = document.getElementById('noResults');
    const resultCount = document.getElementById('resultCount');
    const heading = document.getElementById('latestHeading');

    const filtered = getFilteredArticles();

    heading.textContent = state.activeCategory === 'All' ? 'Latest News' : state.activeCategory;
    resultCount.textContent = `${filtered.length} ${filtered.length === 1 ? 'story' : 'stories'}`;

    if (!filtered.length) {
      grid.innerHTML = '';
      noResults.hidden = false;
      return;
    }
    noResults.hidden = true;

    grid.innerHTML = filtered.map((a, i) => `
      <article class="news-card" data-id="${a.id}" tabindex="0" role="button" aria-label="Read: ${escapeHtml(a.title)}" style="animation-delay:${Math.min(i, 8) * 0.05}s">
        <div class="thumb"><img src="${a.image}" alt="${escapeHtml(a.imageAlt)}" loading="lazy"></div>
        <div class="card-body">
          <span class="badge ${categoryBadgeClass(a.category)}">${a.category}</span>
          <h3>${highlight(a.title, state.query)}</h3>
          <p class="summary">${highlight(a.excerpt, state.query)}</p>
          <div class="meta-row">
            <span>${a.dateline}</span><span class="dot"></span>
            <span>${formatDateShort(a.date)}</span><span class="dot"></span>
            <span class="read-more-tag">Read Story &rarr;</span>
          </div>
        </div>
      </article>
    `).join('');

    grid.querySelectorAll('[data-id]').forEach(el => {
      el.addEventListener('click', () => openArticle(el.dataset.id));
      el.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openArticle(el.dataset.id); } });
    });
  }

  /* ---------------------------------------------------------
     8. SEARCH STATUS BAR
  --------------------------------------------------------- */
  function updateSearchStatus() {
    const bar = document.getElementById('searchStatusBar');
    const text = document.getElementById('searchStatusText');
    const count = getFilteredArticles().length;

    if (!state.query) {
      bar.hidden = true;
      return;
    }
    bar.hidden = false;
    text.innerHTML = `<strong>${count}</strong> result${count === 1 ? '' : 's'} for &ldquo;<strong>${escapeHtml(state.query)}</strong>&rdquo;${state.activeCategory !== 'All' ? ` in <strong>${state.activeCategory}</strong>` : ''}`;
  }

  /* ---------------------------------------------------------
     9. ARTICLE MODAL
  --------------------------------------------------------- */
  let lastFocusedElement = null;

  function getRelated(article) {
    return ARTICLES
      .filter(a => a.id !== article.id)
      .map(a => ({
        article: a,
        score: (a.category === article.category ? 2 : 0) + (a.region === article.region ? 1 : 0)
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map(x => x.article);
  }

  function openArticle(id) {
    const article = ARTICLES.find(a => a.id === id);
    if (!article) return;

    lastFocusedElement = document.activeElement;

    const modal = document.getElementById('articleModal');
    const content = document.getElementById('modalArticleContent');
    const related = getRelated(article);

    content.innerHTML = `
      <img class="hero-img" src="${article.image}" alt="${escapeHtml(article.imageAlt)}" loading="lazy">
      <div class="article-inner">
        <span class="badge ${categoryBadgeClass(article.category)}">${article.category}</span>
        <h1 id="modalTitle">${escapeHtml(article.title)}</h1>
        <div class="meta-row">
          <span>${article.dateline}</span><span class="dot"></span>
          <span>${formatDate(article.date)}</span><span class="dot"></span>
          <span>${readingTime(article)} min read</span><span class="dot"></span>
          <span>By the Daily Dispatchs Newsroom</span>
        </div>
        <div class="article-body">
          ${article.content.map(p => `<p>${escapeHtml(p)}</p>`).join('')}
        </div>

        <div class="share-row">
          <span>Share this story</span>
          <button class="share-btn" data-share="copy" aria-label="Copy link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 0 0-7.07-7.07L11.5 4.5"/><path d="M14 11a5 5 0 0 0-7.07 0L4.1 13.83a5 5 0 0 0 7.07 7.07l1.36-1.36"/></svg>
          </button>
          <button class="share-btn" data-share="twitter" aria-label="Share on X">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-6.6L4.7 22H1.6l8.1-9.3L1 2h7.1l4.9 6.1L18.9 2Z"/></svg>
          </button>
          <button class="share-btn" data-share="facebook" aria-label="Share on Facebook">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.7h2.6l.4-3h-3v-1.9c0-.9.2-1.5 1.6-1.5H16V4.2c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2v2.2H7v3h2.6V21h3.9Z"/></svg>
          </button>
        </div>

        ${related.length ? `
        <div class="related-section">
          <h4>Related Coverage</h4>
          <div class="related-grid">
            ${related.map(r => `
              <div class="related-card" data-id="${r.id}" tabindex="0" role="button" aria-label="Read: ${escapeHtml(r.title)}">
                <div class="thumb"><img src="${r.image}" alt="${escapeHtml(r.imageAlt)}" loading="lazy"></div>
                <div class="rc-body"><h5>${escapeHtml(r.title)}</h5></div>
              </div>
            `).join('')}
          </div>
        </div>` : ''}
      </div>
    `;

    content.querySelectorAll('.related-card').forEach(el => {
      el.addEventListener('click', () => openArticle(el.dataset.id));
      el.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openArticle(el.dataset.id); } });
    });

    content.querySelectorAll('[data-share]').forEach(btn => {
      btn.addEventListener('click', () => handleShare(btn.dataset.share, article));
    });

    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    document.getElementById('modalCloseBtn').focus();
    modal.scrollTop = 0;
    document.querySelector('.modal-panel').scrollTop = 0;
  }

  function handleShare(type, article) {
    const url = window.location.href.split('#')[0] + '#' + article.id;
    if (type === 'copy') {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(url).catch(() => {});
      }
      const btn = event.currentTarget;
      const original = btn.innerHTML;
      btn.innerHTML = '&#10003;';
      setTimeout(() => { btn.innerHTML = original; }, 1400);
    } else if (type === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(url)}`, '_blank', 'noopener');
    } else if (type === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank', 'noopener');
    }
  }

  function closeArticle() {
    const modal = document.getElementById('articleModal');
    modal.hidden = true;
    document.body.style.overflow = '';
    if (lastFocusedElement) lastFocusedElement.focus();
  }

  /* ---------------------------------------------------------
     9b. STATIC PAGES: About Us / Contact Us / Privacy Policy
     Rendered into the same article modal, reusing its styling.
  --------------------------------------------------------- */
  const CONTACT_EMAIL = 'veo222547@gmail.com';

  const STATIC_PAGES = {
    about: {
      badge: 'Masthead',
      title: 'About Daily Dispatchs',
      body: `
        <div class="article-body">
          <p>Daily Dispatchs is an independent digital newsroom covering world affairs, conflict, security, politics, weather and business \u2014 reported straight, updated constantly.</p>
          <p>Our newsroom compiles and reports on developments from trusted wire sources, aiming to give readers a clear, complete picture of the stories moving borders, markets and battle lines, rather than just the headline.</p>
          <p>We believe in fast, thorough and accurate reporting. Every dispatch is reviewed for clarity and accuracy before publication, and we are committed to correcting the record quickly whenever a mistake is made.</p>
          <h4>What We Cover</h4>
          <p>Conflict and security, law and policy, world affairs, weather emergencies and the business stories that shape the global economy.</p>
          <h4>Our Values</h4>
          <p>Independence, accuracy and speed \u2014 in that order. We report the facts as they are confirmed, and we are transparent when facts are still developing.</p>
        </div>
      `
    },
    contact: {
      badge: 'Get In Touch',
      title: 'Contact Us',
      body: `
        <div class="article-body">
          <p>Have a tip, a correction, a press inquiry, or feedback on our coverage? We would like to hear from you.</p>
          <div class="contact-info-box">
            <div class="contact-info-row">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16v16H4z" fill="none" stroke="none"/><path d="M22 6l-10 7L2 6"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
              <span>Email us at <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a></span>
            </div>
          </div>
          <p>For news tips and story ideas, please include as much detail as possible so our newsroom can follow up quickly. For corrections, please reference the headline and publish date of the story in question.</p>
          <h4>Send Us a Message</h4>
          <form class="contact-form" id="contactForm">
            <label class="cf-field">
              <span>Your Name</span>
              <input type="text" name="name" required autocomplete="name">
            </label>
            <label class="cf-field">
              <span>Your Email</span>
              <input type="email" name="email" required autocomplete="email">
            </label>
            <label class="cf-field">
              <span>Message</span>
              <textarea name="message" rows="5" required></textarea>
            </label>
            <button type="submit" class="btn-outline cf-submit">Send Message</button>
            <p class="cf-note" id="contactFormNote" hidden>Thanks! Your email app should now open with your message addressed to ${CONTACT_EMAIL}.</p>
          </form>
        </div>
      `
    },
    privacy: {
      badge: 'Legal',
      title: 'Privacy Policy',
      body: `
        <div class="article-body">
          <p>This Privacy Policy explains how Daily Dispatchs collects, uses and protects information when you visit our website.</p>
          <h4>Information We Collect</h4>
          <p>We may collect basic, non-identifying information such as browser type and pages visited to help us understand how readers use our site. We do not knowingly collect sensitive personal information through normal browsing.</p>
          <h4>Contact Form Information</h4>
          <p>If you contact us using our contact form or by email, we collect the name, email address and message you provide solely to respond to your inquiry. We do not sell or share this information with third parties.</p>
          <h4>Cookies</h4>
          <p>Our site may use minimal cookies or local storage to remember basic preferences such as filters or search state. These do not track you across other websites.</p>
          <h4>Third-Party Links</h4>
          <p>Our articles may link to external wire sources such as Reuters, AP or TIME. We are not responsible for the privacy practices of those third-party sites.</p>
          <h4>Contact Us About Privacy</h4>
          <p>If you have questions about this policy, please email us at <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>.</p>
        </div>
      `
    }
  };

  function openStaticPage(key) {
    const page = STATIC_PAGES[key];
    if (!page) return;

    lastFocusedElement = document.activeElement;

    const modal = document.getElementById('articleModal');
    const content = document.getElementById('modalArticleContent');

    content.innerHTML = `
      <div class="article-inner static-page">
        <span class="badge">${page.badge}</span>
        <h1 id="modalTitle">${page.title}</h1>
        ${page.body}
      </div>
    `;

    if (key === 'contact') {
      const form = document.getElementById('contactForm');
      if (form) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const name = form.querySelector('[name="name"]').value;
          const email = form.querySelector('[name="email"]').value;
          const message = form.querySelector('[name="message"]').value;
          const subject = encodeURIComponent('Message from ' + name + ' via Daily Dispatchs');
          const bodyText = encodeURIComponent(message + '\n\nFrom: ' + name + ' (' + email + ')');
          window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${bodyText}`;
          document.getElementById('contactFormNote').hidden = false;
        });
      }
    }

    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    document.getElementById('modalCloseBtn').focus();
    modal.scrollTop = 0;
    document.querySelector('.modal-panel').scrollTop = 0;
  }

  function initStaticPageLinks() {
    document.querySelectorAll('[data-static]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        openStaticPage(el.dataset.static);
      });
    });
  }

  /* ---------------------------------------------------------
     10. MOBILE NAV
  --------------------------------------------------------- */
  function toggleMobileNav() {
    const nav = document.getElementById('mainNav');
    const overlay = document.getElementById('navOverlay');
    const btn = document.getElementById('hamburgerBtn');
    const isOpen = nav.classList.toggle('open');
    overlay.classList.toggle('show', isOpen);
    btn.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeMobileNav() {
    const nav = document.getElementById('mainNav');
    const overlay = document.getElementById('navOverlay');
    const btn = document.getElementById('hamburgerBtn');
    nav.classList.remove('open');
    overlay.classList.remove('show');
    btn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  /* ---------------------------------------------------------
     11. SEARCH INPUT
  --------------------------------------------------------- */
  function initSearch() {
    const input = document.getElementById('searchInput');
    const clearBtn = document.getElementById('searchClearBtn');
    let debounceTimer;

    input.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        state.query = input.value.trim();
        clearBtn.hidden = !state.query;
        renderFeatured();
        renderNewsGrid();
        updateSearchStatus();
      }, 150);
    });

    clearBtn.addEventListener('click', () => {
      input.value = '';
      state.query = '';
      clearBtn.hidden = true;
      renderFeatured();
      renderNewsGrid();
      updateSearchStatus();
      input.focus();
    });

    document.getElementById('resetSearchBtn').addEventListener('click', () => {
      input.value = '';
      state.query = '';
      state.activeCategory = 'All';
      clearBtn.hidden = true;
      renderNav();
      renderFilterBar();
      renderFeatured();
      renderNewsGrid();
      updateSearchStatus();
    });
  }

  /* ---------------------------------------------------------
     12. MISC UI: back to top, dates, ESC key, newsletter
  --------------------------------------------------------- */
  function initBackToTop() {
    const btn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
      btn.hidden = window.scrollY < 500;
    });
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function initHeaderDate() {
    const now = new Date();
    document.getElementById('footerYear').textContent = now.getFullYear();
  }

  function initModalEvents() {
    document.getElementById('modalCloseBtn').addEventListener('click', closeArticle);
    document.getElementById('articleModal').addEventListener('click', (e) => {
      if (e.target.id === 'articleModal') closeArticle();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const modal = document.getElementById('articleModal');
        if (!modal.hidden) closeArticle();
        const nav = document.getElementById('mainNav');
        if (nav.classList.contains('open')) closeMobileNav();
      }
    });
  }

  function initHamburger() {
    document.getElementById('hamburgerBtn').addEventListener('click', toggleMobileNav);
    document.getElementById('navOverlay').addEventListener('click', closeMobileNav);
  }

  function initLogoHome() {
    document.getElementById('logoHome').addEventListener('click', (e) => {
      e.preventDefault();
      state.query = '';
      state.activeCategory = 'All';
      document.getElementById('searchInput').value = '';
      document.getElementById('searchClearBtn').hidden = true;
      renderNav();
      renderFilterBar();
      renderFeatured();
      renderNewsGrid();
      updateSearchStatus();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Deep-link support: #article-id opens that article on load
  function checkDeepLink() {
    const hash = window.location.hash.replace('#', '');
    if (hash && ARTICLES.some(a => a.id === hash)) {
      openArticle(hash);
    } else if (hash && STATIC_PAGES[hash]) {
      openStaticPage(hash);
    }
  }

  /* ---------------------------------------------------------
     13. INIT
  --------------------------------------------------------- */
  function init() {
    initHeaderDate();
    renderTicker();
    renderNav();
    renderFilterBar();
    renderFeatured();
    renderNewsGrid();
    initSearch();
    initBackToTop();
    initModalEvents();
    initHamburger();
    initLogoHome();
    initStaticPageLinks();
    checkDeepLink();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
