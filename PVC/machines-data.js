const machinesData = JSON.parse(`{
  "pages": [
    {
      "language": "EN",
      "detailsTabName": "Technical Details",
      "descriptionTabName": "Description",
      "productsMenu": "Products",
      "contactsMenu": "Contacts",
      "trAddress":"Head office: Turkey, Bursa",
      "trEmail":"info.pvc.mashini@gmail.com",
      "bgAddress":"Bulgaria, Kardzhali",
      "bgEmail":"pvc.mashini.bulgaria@gmail.com",
      "machines": [
        {
          "title": "Automatic End Milling Machine for PVC and Aluminium Profiles ( Rapid Blade Changing )",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/AMM-01-300.jpg",
          "decription": [
            {
              "detail": "For end milling of transom in PVC and Aluminum profiles."
            },
            {
              "detail": "Ability to route at varying angles up to 30° ."
            },
            {
              "detail": "Positioning of the tools with pneumatic feed cylinder"
            },
            {
              "detail": "Without changing the cutter set, two different series of transom profiles can be processed."
            },
            {
              "detail": "Vertical pneumatic profile clamping system enables optimum work piece fixing."
            },
            {
              "detail": "Pneumatic clamping system"
            }
          ],
          "technicalDetails": [
            {
              "key": "Voltage",
              "value": "380 V"
            },
            {
              "key": "Frequency",
              "value": "50 Hz"
            },
            {
              "key": "Total power",
              "value": "1,1 Kw"
            },
            {
              "key": "Air pressure",
              "value": "6 – 8 bar"
            },
            {
              "key": "Air consumption",
              "value": "3 lt./min"
            },
            {
              "key": "Width – Length – Height",
              "value": "670 – 610 – 1090"
            },
            {
              "key": "Machine weight",
              "value": "105 kg"
            }
          ]
        },
        {
          "title": "Single head mitre saw machine for PVC and Aluminium Profiles",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/MOS-01-300.jpg",
          "decription": [
            {
              "detail": "PVC and Aluminum profiles cutting."
            },
            {
              "detail": "Allows to cut by the fixing both sides in 15°- 20°- 25°- 30°- 35°- 40°- 45°"
            },
            {
              "detail": "Adjustable Saw Blade speed."
            },
            {
              "detail": "Pneumatic profile clamping system."
            },
            {
              "detail": "Conveyor systems for Right / Left side"
            },
            {
              "detail": "Allows for easy rotation because of to run on the ball in the center."
            },
            {
              "detail": "Diameter of the saw blade is 420 mm"
            },
            {
              "detail": "Cooling system for aluminum profiles cutting. (OPTIONAL)"
            }
          ],
          "technicalDetails": [
            {
              "key": "Voltage",
              "value": "380 V"
            },
            {
              "key": "Frequency",
              "value": "50- 60 Hz"
            },
            {
              "key": "Total power",
              "value": "1,5 Kw"
            },
            {
              "key": "Air pressure",
              "value": "6 – 8 bar"
            },
            {
              "key": "Air consumption",
              "value": "10.3 lt / min"
            },
            {
              "key": "Saw Blade diameter",
              "value": "420 mm 3500 Turnover/ min"
            },
            {
              "key": "Width – Length – Height",
              "value": "850 – 670 – 1250"
            },
            {
              "key": "Machine weight",
              "value": "210 kg"
            }
          ]
        },
        {
          "title": "Full automatic single head mitre saw machine for PVC and Aluminium Profiles (with turntable)",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/AOS-01-300.jpg",
          "decription": [
            {
              "detail": "PVC and Aluminum profiles cutting."
            },
            {
              "detail": "Automatic cutting between 45° – 90° – 130°"
            },
            {
              "detail": "Manuel cutting between 15°- 20°- 25°- 30°- 35°- 40°"
            },
            {
              "detail": "Adjustable Saw Blade speed."
            },
            {
              "detail": "Pneumatic profile clamping system."
            },
            {
              "detail": "Auto cutting system for +45° and -45°"
            },
            {
              "detail": "Conveyor systems for Right / Left side"
            },
            {
              "detail": "Manuel working, allows for easy rotation because ofto run on the ball in the center."
            },
            {
              "detail": "Diameter of the saw blade is 420 mm"
            },
            {
              "detail": "Cooling system for aluminum profiles cutting. (optional)"
            }
          ],
          "technicalDetails": [
            {
              "key": "Voltage",
              "value": "380 V"
            },
            {
              "key": "Frequency",
              "value": "50 Hz"
            },
            {
              "key": "Total power",
              "value": "1,5 Kw"
            },
            {
              "key": "Air pressure",
              "value": "6 – 8 bar"
            },
            {
              "key": "Air consumption",
              "value": "4 lt / min"
            },
            {
              "key": "Saw Blade diameter",
              "value": "420 mm 3500 Turnover/ min"
            },
            {
              "key": "Width – Length – Height",
              "value": "850 – 670 – 1250"
            },
            {
              "key": "Machine weight",
              "value": "210 kg"
            }
          ]
        },
        {
          "title": "Automatic single head mitre saw machine (NC controlled)",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/COS-01-300.jpg",
          "decription": [
            {
              "detail": "PVC and Aluminum profiles cutting."
            },
            {
              "detail": "Digital, fully automatic cutting system"
            },
            {
              "detail": "Automatic cutting between 45° – 135°"
            },
            {
              "detail": "Possibility to turn to cut +45°and -45°"
            },
            {
              "detail": "Cooling system for aluminum cutting"
            },
            {
              "detail": "Diameter of the saw blade is 420 mm"
            },
            {
              "detail": "Conveyor systems for Right / Left side"
            },
            {
              "detail": "Pneumatic profileclamping system."
            },
            {
              "detail": "Adjustable Saw Blade speed."
            }
          ],
          "technicalDetails": [
            {
              "key": "Voltage",
              "value": "380 V"
            },
            {
              "key": "Frequency",
              "value": "50- 60 Hz"
            },
            {
              "key": "Total power",
              "value": "1,5 Kw"
            },
            {
              "key": "Air pressure",
              "value": "6 – 8 bar"
            },
            {
              "key": "Air consumption",
              "value": "10.3 lt / min"
            },
            {
              "key": "Saw Blade diameter",
              "value": "420 mm 3500 Turnover/ min"
            },
            {
              "key": "Width – Length – Height",
              "value": "950 – 740 – 1300"
            },
            {
              "key": "Machine weight",
              "value": "260 kg"
            }
          ]
        },
        {
          "title": "Automatic double corner cutting machine for PVC and Aluminium Profiles",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/DCC-01-300.jpg",
          "decription": [
            {
              "detail": "PVC and Aluminum profiles cutting."
            },
            {
              "detail": "Adjusting to cut PVC and Aluminum profiles in 45° and 90° and between these other *degrees can make by the LCD screen on the control panel."
            },
            {
              "detail": "Automatic digital positioning"
            },
            {
              "detail": "LCD Control Panel."
            },
            {
              "detail": "PLC Control System."
            },
            {
              "detail": "20 different memory capacity of the containing the number of cutting and sizes."
            },
            {
              "detail": "Protective covers are working automatically with pneumatic systems"
            },
            {
              "detail": "Both of the head movable and at the same time can cut separately in 45 and 90"
            },
            {
              "detail": "Cooling systems for aluminum cutting"
            },
            {
              "detail": "Program for slicing of the Aluminum wedge."
            },
            {
              "detail": "Cutting accuracy is 0.1 mm."
            }
          ],
          "technicalDetails": [
            {
              "key": "Voltage",
              "value": "380 V"
            },
            {
              "key": "Frequency",
              "value": "50 Hz"
            },
            {
              "key": "Total power",
              "value": "6,5 Kw"
            },
            {
              "key": "Air pressure",
              "value": "6 – 8 bar"
            },
            {
              "key": "Air consumption",
              "value": "50 lt/min"
            },
            {
              "key": "Saw Blade diameter",
              "value": "450 mm"
            },
            {
              "key": "Width – Length – Height",
              "value": "4040 – 1140 – 1150"
            },
            {
              "key": "Machine weight",
              "value": "710 kg"
            },
            {
              "key": "Metal Stand Length",
              "value": "2000 mm"
            },
            {
              "key": "Control System",
              "value": "PLC"
            }
          ]
        },
        {
          "title": "Automatic PVC Glazing Bead Saw Machine",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/ABS-01-300.jpg",
          "decription": [
            {
              "detail": "Two special saw blades positioned at 45° for simultaneous undercutting of the glazing bead profiles."
            },
            {
              "detail": "By means of special counter blocks two glazing bead profiles can be cut at the same time."
            },
            {
              "detail": "Standard equipped with conveyor system with manual measuring rod and adjustable length fixing stopper."
            },
            {
              "detail": "Automatic operation with adjustable feed speed."
            },
            {
              "detail": "Pneumatic clamping system"
            },
            {
              "detail": "Diameter of saw blades 200 mm"
            }
          ],
          "technicalDetails": [
            {
              "key": "Voltage",
              "value": "380 V"
            },
            {
              "key": "Frequency",
              "value": "50 Hz"
            },
            {
              "key": "Total power",
              "value": "1,5 Kw"
            },
            {
              "key": "Air pressure",
              "value": "6 – 8 bar"
            },
            {
              "key": "Air consumption",
              "value": "8 lt/min"
            },
            {
              "key": "Saw Blade diameter",
              "value": "200 mm – 125 mm"
            },
            {
              "key": "Width – Length – Height",
              "value": "470 – 1140 – 1130"
            },
            {
              "key": "Machine weight",
              "value": "115 kg"
            }
          ]
        },
        {
          "title": "Automatic PVC Profile Corner Cleaning Machine (Easy Blade Changing)",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/ACC-01-300.jpg",
          "decription": [
            {
              "detail": "Suitable to clean lower, upper and outer corner surfaces of the profiles after welding operation"
            },
            {
              "detail": "Could be used with 2-4-6-8-10 knives"
            },
            {
              "detail": "Automatic identification for the different knives"
            },
            {
              "detail": "In case of Emergency Stop, does not unclasp the profile before knives return."
            },
            {
              "detail": "Information on the digital screen, possibility for technical malfunctions."
            }
          ],
          "technicalDetails": [
            {
              "key": "Voltage",
              "value": "380 V"
            },
            {
              "key": "Frequency",
              "value": "50 Hz"
            },
            {
              "key": "Total power",
              "value": "1.5 Kw"
            },
            {
              "key": "Air pressure",
              "value": "6 – 8 bar"
            },
            {
              "key": "Air consumption",
              "value": "7 lt/min"
            },
            {
              "key": "Width – Length – Height",
              "value": "800 – 1100 – 1600"
            },
            {
              "key": "Machine weigh",
              "value": "225kg"
            },
            {
              "key": "Control systems",
              "value": "Microcomputer"
            }
          ]
        },
        {
          "title": "Automatic Router With A Spindle Drilling Water Slot for PVC and Aluminium Profiles",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/AMD-01-300.jpg",
          "decription": [
            {
              "detail": "To open mills lock holes, hinge slots and drain slots on PVC and Aluminum profiles"
            },
            {
              "detail": "Vertical copying head operation."
            },
            {
              "detail": "Horizontal triple drilling operation."
            },
            {
              "detail": "Drain slot mills working in various angles."
            },
            {
              "detail": "Universal copying patterns (we can produce as you want)"
            },
            {
              "detail": "Pneumatic clamping system"
            }
          ],
          "technicalDetails": [
            {
              "key": "Voltage",
              "value": "380 V"
            },
            {
              "key": "Frequency",
              "value": "50 Hz"
            },
            {
              "key": "Total power",
              "value": "1,3 Kw"
            },
            {
              "key": "Air pressure",
              "value": "6 – 8 bar"
            },
            {
              "key": "Air consumption",
              "value": "3 lt/min"
            },
            {
              "key": "Saw Blade diameter",
              "value": "420 mm"
            },
            {
              "key": "Width – Length – Height",
              "value": "650 – 1000 – 1350"
            },
            {
              "key": "Machine weight",
              "value": "120 kg"
            }
          ]
        },
        {
          "title": "Automatic Single Corner PVC Profile Welding Machine (welding seal thickness to 0,2 mm)",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/SCW-001-300.jpg",
          "decription": [
            {
              "detail": "Welds corner of thePVC profiles"
            },
            {
              "detail": "Welds white and colored PVC profiles."
            },
            {
              "detail": "Possibility of the welding between 60° – 180°"
            },
            {
              "detail": "Digital temperature system controlling"
            },
            {
              "detail": "Clamping of profiles one by one by the foot pedal"
            },
            {
              "detail": "Controlling of the pressure systems."
            },
            {
              "detail": "Welding clearance 0.2 mm."
            }
          ],
          "technicalDetails": [
            {
              "key": "Voltage",
              "value": "230 V"
            },
            {
              "key": "Frequency",
              "value": "50 Hz"
            },
            {
              "key": "Total power",
              "value": "2 Kw"
            },
            {
              "key": "Air pressure",
              "value": "6 – 8 bar"
            },
            {
              "key": "Air consumption",
              "value": "7 lt/min"
            },
            {
              "key": "Welding angle",
              "value": "30° – 180°"
            },
            {
              "key": "Width – Length – Height",
              "value": "620 – 750 – 1350"
            },
            {
              "key": "Machine weight",
              "value": "140 kg"
            },
            {
              "key": "Control systems",
              "value": "Microcomputer"
            }
          ]
        },
        {
          "title": "Automatic Double Corner PVC Profile Welding Machine (welding seal thickness to 0,2 mm)",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/DCW-01-300.jpg",
          "decription": [
            {
              "detail": "Welds both of the corners at the same time."
            },
            {
              "detail": "Welds white and colored PVC profiles."
            },
            {
              "detail": "Welds both of the corners in single operation 2 x 90"
            },
            {
              "detail": "Welds 90 – 130 with fixed head."
            },
            {
              "detail": "Welds 90 – 170 with moving head."
            },
            {
              "detail": "Fully automatic control system."
            },
            {
              "detail": "Digital temperature system controlling"
            },
            {
              "detail": "Controlling of the pressure systems."
            },
            {
              "detail": "Welding clearance 0.2 mm ."
            },
            {
              "detail": "Pneumatic braking system on the right head."
            },
            {
              "detail": "Right welding head moves easily on the sliding rollers."
            }
          ],
          "technicalDetails": [
            {
              "key": "Voltage",
              "value": "230 V"
            },
            {
              "key": "Frequency",
              "value": "50 Hz"
            },
            {
              "key": "Total power",
              "value": "4 Kw"
            },
            {
              "key": "Air pressure",
              "value": "6 – 8 bar"
            },
            {
              "key": "Air consumption",
              "value": "8 lt/min"
            },
            {
              "key": "Minimum welding size",
              "value": "470mm"
            },
            {
              "key": "Maximum welding size",
              "value": "3350 mm"
            },
            {
              "key": "Width – Length – Height",
              "value": "760 – 4400 – 1400"
            },
            {
              "key": "Machine weight",
              "value": "540 kg"
            },
            {
              "key": "Control System",
              "value": "PLC"
            }
          ]
        },
        {
          "title": "Compressor 500 Lt",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/compresor-300.jpg",
          "decription": [
            {
              "detail": "Double stage pistons air compressors that consist of two cylinders are produced available for both single and three phase by using ABAC air pump that is the most known brand name in the air pump sectors in terms of performance and quality."
            },
            {
              "detail": "The maximum working pressure rate is 12 Bar for our double stage goods and should not beused higher than this. Double stage compressors are arranged to 9-11 Bar in the factory. Unloaded running of the compressor is provided by discharging the air automatically. S. Valve is used in the same function for the bigger compressors."
            },
            {
              "detail": "The running system is in the type of start & stop for the all kinds of compressors"
            },
            {
              "detail": "All our compressors run without vibration and balance"
            }
          ],
          "technicalDetails": []
        },
        {
          "title": "Portable Welding Machine",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/nastolna-300.png",
          "decription": [],
          "technicalDetails": [
            {
              "key": "Voltage",
              "value": "230 V"
            },
            {
              "key": "Frequency",
              "value": "50 Hz"
            },
            {
              "key": "Total power",
              "value": "2 Kw"
            },
            {
              "key": "Width",
              "value": "550 mm"
            },
            {
              "key": "Length",
              "value": "690 mm."
            },
            {
              "key": "Height",
              "value": "750 mm."
            },
            {
              "key": "Machine weight",
              "value": "72 kg."
            },
            {
              "key": "System control",
              "value": "Microcomputer"
            }
          ]
        },
        {
          "title": "Punch Press for aluminum joinery",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/presa-za-aluminiy.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Portable Mitre Saw Machine for PVC and Al.profiles / Ø 300 mm.",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/kesim-300.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Portable End Milling Machine for PVC and Al.profiles",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/PortableEndMilling-300.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Portable Copy Router Machine for PVC and Al.Profiles",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/PortableCopyRouterMachine-300.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Automatic Single Surface Cleaning Machine",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/SurfaceCleaningMachine.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Mechanical Surface Cleaning Apparatus",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/MechanicalCleaningSurface.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "PVC Surface Cleaning Tool",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/richna-dleto.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Conveyor",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/lineal.jpg",
          "decription": [],
          "technicalDetails": []
        }
      ]
    },
    {
      "language": "BG",
      "detailsTabName": "Технически параметри",
      "descriptionTabName": "Описание",
      "productsMenu": "Продукти",
      "contactsMenu": "Контакти",
      "trAddress":"Централен офис: Турция, Бурса",
      "trEmail":"info.pvc.mashini@gmail.com",
      "bgAddress":"България, Кърджали",
      "bgEmail":"pvc.mashini.bulgaria@gmail.com",
      "machines": [
        {
          "title": "Челна фреза за фрезоване на ПВЦ и АL профили (с бързо сменящи се серийни ножове)",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/AMM-01-300.jpg",
          "decription": [
            {
              "detail": "Използва се за фрезоване на краищата на делителя на ПВЦ иАлумииевите профили"
            },
            {
              "detail": "С възможност за фрезоване на делителя при различни игли до 30°"
            },
            {
              "detail": "Стягането на профилите се извършва с помоща на пневматичен падащ цилиндър"
            },
            {
              "detail": "Две различни серии делители могат да бъдат обработени без да се сменят ножовете"
            },
            {
              "detail": "Вертикална пневматична профил затягане система осигурява оптимално укрепване на заготовката"
            },
            {
              "detail": "Пневматична система за захващане"
            },
            {
              "detail": "Работи едновременно с 2 ножа"
            }
          ],
          "technicalDetails": [
            {
              "key": "Максимална мощност",
              "value": "1.1 KW"
            },
            {
              "key": "Стандартно напрежение",
              "value": "380 V."
            },
            {
              "key": "Честота",
              "value": "50 Hz."
            },
            {
              "key": "Въздушно налягане",
              "value": "6-8 бара"
            },
            {
              "key": "Въздушна консумация",
              "value": "3 лт./мин"
            },
            {
              "key": "Дължина на машината",
              "value": "610 мм."
            },
            {
              "key": "Ширина на машината",
              "value": "670 мм."
            },
            {
              "key": "Височина на машината",
              "value": "1090 мм."
            },
            {
              "key": "Тегло на машината",
              "value": "105 кг."
            }
          ]
        },
        {
          "title": "Машина за автоматично рязане на PVC и AL профили с долно подаване на диска",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/MOS-01-300.jpg",
          "decription": [
            {
              "detail": "Използва се за рязaне на ПВЦ и АЛ профили."
            },
            {
              "detail": "15°- 20°- 25°- 30°- 35°- 40°- 45° и в двете страни дава възможностза рязане на желания градус чрез фиксиране."
            },
            {
              "detail": "Скоростта на режещия диск може да се регулира."
            },
            {
              "detail": "Циркулярът е с диаметър 420 мм."
            },
            {
              "detail": "С пневматична притискателна система за захващане на профила."
            },
            {
              "detail": "Въртяща се системa за дясна и на лявастрана."
            },
            {
              "detail": "Специален ограничетел за изрязване на желания размер."
            },
            {
              "detail": "Охлаждаща система при рязане на алуминиви профили (прави се по желание на клиента)."
            },
            {
              "detail": "След отваряне на горния капак машината спира автоматично."
            },
            {
              "detail": "Въздушен пистолетза почистване на машината."
            },
            {
              "detail": "2 броя стандартни линеала с метрови показатели по 2,50 см. (по желание на клиента може и друг размер)."
            }
          ],
          "technicalDetails": [
            {
              "key": "Максимална мощност",
              "value": "1.5 KW."
            },
            {
              "key": "Стандартно напрежение",
              "value": "380 V."
            },
            {
              "key": "Честота",
              "value": "50 -60 Hz."
            },
            {
              "key": "Въздушно налягане",
              "value": "6-8 бара"
            },
            {
              "key": "Въздушна консумация",
              "value": "10.3 лт./ мин"
            },
            {
              "key": "Размер на диска",
              "value": "420 мм/ 3500 оборота/ мин."
            },
            {
              "key": "Дължина на машината",
              "value": "670 мм."
            },
            {
              "key": "Ширина на машината",
              "value": "850 мм."
            },
            {
              "key": "Височина на машината",
              "value": "1250 мм."
            },
            {
              "key": "Тегло на машината",
              "value": "210 кг."
            }
          ]
        },
        {
          "title": "Машина за напълно автоматично рязане на ПВЦ и AL профили с долно подаване на диска (с въртяща се табла)",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/AOS-01-300.jpg",
          "decription": [
            {
              "detail": "Използва се за рязaне на ПВЦ и АЛ профили."
            },
            {
              "detail": "Автоматично рязане на ПВЦ и АЛ профили между 45° – 90° – 130°."
            },
            {
              "detail": "Ръчен режим на работа за рязане на ПВЦ и АЛ профили при 15°- 20°- 25°- 30°- 35°- 40°."
            },
            {
              "detail": "С пневматична притискателна система за захващане на профила."
            },
            {
              "detail": "Автоматично рязане чрез команда на автоматично въртящата се табла +45° ve -45."
            },
            {
              "detail": "Скоростта на режещия диск може да се регулира."
            },
            {
              "detail": "Циркулярът е с диаметър 420мм."
            },
            {
              "detail": "Въртяща се табла,която се движи за дясна и на лява страна."
            },
            {
              "detail": "Специален ограничетел за изрязване на желания размер."
            },
            {
              "detail": "Охлаждаща система при рязане на алуминиви профили (по желание на клиента)."
            },
            {
              "detail": "След отваряне на горния капакмашината спира автоматично."
            },
            {
              "detail": "Въздушен пистолет за почистване на машината."
            },
            {
              "detail": "2 броя стандартни линеала с метрови показатели по 2,50 см. (по желание на клиента може и друг размер)."
            }
          ],
          "technicalDetails": [
            {
              "key": "Максимална мощност",
              "value": "1.5 KW."
            },
            {
              "key": "Стандартно напрежение",
              "value": "380 V."
            },
            {
              "key": "Честота",
              "value": "50-60 Hz."
            },
            {
              "key": "Въздушно налягане",
              "value": "6-8 бара"
            },
            {
              "key": "Въздушна консумация",
              "value": "10.3 лт./ мин."
            },
            {
              "key": "Размер на диска",
              "value": "420 мм/ 3500 оборота/ мин."
            },
            {
              "key": "Дължина на машината",
              "value": "670 мм."
            },
            {
              "key": "Ширина на машината",
              "value": "850 мм."
            },
            {
              "key": "Височина на машината",
              "value": "1250 мм."
            },
            {
              "key": "Тегло на машината",
              "value": "210 кг."
            }
          ]
        },
        {
          "title": "Машина за автоматично рязане на ПВЦ и АЛ.профили с долно подаване на диска (NC контролирана)",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/COS-01-300.jpg",
          "decription": [
            {
              "detail": "Използва се за рязaне на ПВЦ и АЛ профили."
            },
            {
              "detail": "Автоматично рязане на ПВЦ и АЛ профилите между 45° до 130°."
            },
            {
              "detail": "С възможност да се движи към страната която режи."
            },
            {
              "detail": "При рязане на 45° и135° след нарязване с възможност въртящата се табла отново да се връща на 45°."
            },
            {
              "detail": "Охлаждаща система при рязане на алуминиви профили (по желание на клиента)."
            },
            {
              "detail": "Дискът за рязане е с диаметър 420 мм."
            },
            {
              "detail": "2 броя стандартни линеала с метрови показатели по 2,50 см. (по желание на клиента може и друг размер)."
            },
            {
              "detail": "Скоростта на режещия диск може да се регулира."
            }
          ],
          "technicalDetails": [
            {
              "key": "Максимална мощност",
              "value": "1.5 KW."
            },
            {
              "key": "Стандартно напрежение",
              "value": "380 V."
            },
            {
              "key": "Честота",
              "value": "50-60 Hz."
            },
            {
              "key": "Въздушно налягане",
              "value": "6-8 бара"
            },
            {
              "key": "Въздушна консумация",
              "value": "10.3 лт./ мин"
            },
            {
              "key": "Размер на диска",
              "value": "420 мм/ 3500 оборота/ мин."
            },
            {
              "key": "Дължина на машината",
              "value": "950 мм."
            },
            {
              "key": "Ширина на машината",
              "value": "740 мм."
            },
            {
              "key": "Височина на машината",
              "value": "1300 мм."
            },
            {
              "key": "Тегло на машината",
              "value": "260 кг."
            }
          ]
        },
        {
          "title": "Автоматична двуглава машина за автоматично рязане на ПВЦ и АЛ.профили",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/DCC-01-300.jpg",
          "decription": [
            {
              "detail": "При рязането на ПВЦ и Ал. профили от 45° до 90°, както междинни степени се използваконтролна панела оборудван с LCD-дисплей."
            },
            {
              "detail": "Автоматично цифрово позициониране."
            },
            {
              "detail": "LCD контрол панели."
            },
            {
              "detail": "PLC контрол системи"
            },
            {
              "detail": "Съдържа 20 различни програми за запаметяване на бройките за рязане и размерите им."
            },
            {
              "detail": "Предпазните калъфи работят автоматично с пневматични системи."
            },
            {
              "detail": "Двете глави се движат независимо един от друг и могаг да извършват рязане под ъгъл от 45° или 90°."
            },
            {
              "detail": "Охлаждаща система при рязане на алуминиви профили (по желание на клиента)"
            },
            {
              "detail": "Оптична система за измерване на дължина, осигуряваща намаляване на точност ± 0,1 mm"
            },
            {
              "detail": "Program for slicing of the Aluminum wedge."
            }
          ],
          "technicalDetails": [
            {
              "key": "Максимална мощност",
              "value": "6.5 Kw."
            },
            {
              "key": "Стандартно напрежение",
              "value": "380 V."
            },
            {
              "key": "Честота",
              "value": "50 Hz."
            },
            {
              "key": "Въздушно налягане",
              "value": "6-8 бара"
            },
            {
              "key": "Въздушна консумация",
              "value": "50 лт./ мин"
            },
            {
              "key": "Размер на диска",
              "value": "450 мм."
            },
            {
              "key": "Дължина на машината",
              "value": "4040 мм."
            },
            {
              "key": "Ширина на машината",
              "value": "1140 мм."
            },
            {
              "key": "Височина на машината",
              "value": "1150 мм."
            },
            {
              "key": "Тегло на машината",
              "value": "710 кг."
            },
            {
              "key": "Метална стойка дължина",
              "value": "2000 мм. Metal Stand Length"
            },
            {
              "key": "Система за управление",
              "value": "PLS Control System"
            }
          ]
        },
        {
          "title": "Машина за автоматично рязане на ПВЦ стъклодържатели",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/ABS-01-300.jpg",
          "decription": [
            {
              "detail": "Възможност за нарязване на ПВЦ стъклодържатели на 45°ъгъл."
            },
            {
              "detail": "Машината извършва всички операции напълно автоматично."
            },
            {
              "detail": "За дългите профили има линеал с метрови показатели и фиксатор по него."
            },
            {
              "detail": "Регулируема скорост на рязане."
            },
            {
              "detail": "Пневматична притискателна система за захващане на профила."
            },
            {
              "detail": "Размер на дисковете за рязане 2х125мм- 2х200 мм."
            }
          ],
          "technicalDetails": [
            {
              "key": "Максимална мощност",
              "value": "1.5 KW."
            },
            {
              "key": "Стандартно напрежение",
              "value": "380 V."
            },
            {
              "key": "Честота",
              "value": "50 Hz."
            },
            {
              "key": "Въздушно налягане",
              "value": "6 -8 бара"
            },
            {
              "key": "Въздушна консумация",
              "value": "8 лт./ мин"
            },
            {
              "key": "Размер на диска",
              "value": "2х200 mm – 2х125 mm"
            },
            {
              "key": "Дължинана машината",
              "value": "1140 мм."
            },
            {
              "key": "Ширина на машината",
              "value": "470 мм."
            },
            {
              "key": "Височина на машината",
              "value": "1130 мм."
            },
            {
              "key": "Тегло на машината",
              "value": "115 кг."
            }
          ]
        },
        {
          "title": "Машина за автоматично ъглопочистване на ПВЦ врати и прозорци (с бързо сменящи се серийни ножове)",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/ACC-01-300.jpg",
          "decription": [
            {
              "detail": "Използва се за почистване на долните,горните и външните повърхностти от шлака образувани след заваряване."
            },
            {
              "detail": "Могат да се слагат 2-4-6-8-10 ножа."
            },
            {
              "detail": "Автоматично разпознаване на ножове."
            },
            {
              "detail": "Информация за възможни технически неизправности се показва на цифровия контролен панел."
            },
            {
              "detail": "Без да се сменят ножовете може автоматично да се почиства 2-4-6 различни ПВЦ профила."
            },
            {
              "detail": "В случай на аварийно спиране, не оставайте профила преди ножове връщат."
            }
          ],
          "technicalDetails": [
            {
              "key": "Максимална мощност",
              "value": "1.5 Kw."
            },
            {
              "key": "Стандартно напрежение",
              "value": "380 V."
            },
            {
              "key": "Честота",
              "value": "50 Hz."
            },
            {
              "key": "Въздушно налягане",
              "value": "6 -8 бара"
            },
            {
              "key": "Въздушна консумация",
              "value": "7 лт./ мин."
            },
            {
              "key": "Дължина на машината",
              "value": "1100 мм."
            },
            {
              "key": "Ширина на машината",
              "value": "800 мм."
            },
            {
              "key": "Височина на машината",
              "value": "1600 мм."
            },
            {
              "key": "Тегло на машината",
              "value": "225кг."
            },
            {
              "key": "Система за управление",
              "value": "Микрокомпютър"
            }
          ]
        },
        {
          "title": "Копир фреза автоматична за пробиване и фрезоване местата за улеите и  за оттичане на водите на ПВЦ и Алуминиеви профили",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/AMD-01-300.jpg",
          "decription": [
            {
              "detail": "Използва се с помощта на шаблон за пробиване на местата за бравите, дръжките и автоматично отваряне на местата за улеите за оттичане на водите."
            },
            {
              "detail": "Vertical copying head operation."
            },
            {
              "detail": "Има пневматична притискаща система."
            },
            {
              "detail": "Универсален шаблон (с възможностда се направи шаблон по желание)"
            },
            {
              "detail": "Способност да работи самостоятелно на всеки един от операциите."
            }
          ],
          "technicalDetails": [
            {
              "key": "Максимална мощност",
              "value": "1.3 Kw."
            },
            {
              "key": "Стандартно напрежение",
              "value": "380 V."
            },
            {
              "key": "Честота",
              "value": "50 Hz."
            },
            {
              "key": "Въздушно налягане",
              "value": "6-8 бара"
            },
            {
              "key": "Въздушна консумация",
              "value": "3 лт./ мин."
            },
            {
              "key": "Дължина на машината",
              "value": "1000 мм."
            },
            {
              "key": "Ширина на машината",
              "value": "650 мм."
            },
            {
              "key": "Височина на машината",
              "value": "1350 мм."
            },
            {
              "key": "Тегло на машината",
              "value": "120 кг."
            }
          ]
        },
        {
          "title": "Автоматическа едноглава лепачка за лепене на ПВЦ профили с нулев шев",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/SCW-001-300.jpg",
          "decription": [
            {
              "detail": "Използва се за завяряване на ъглите на ПВЦ профилите."
            },
            {
              "detail": "Заварява бели и цветни ПВЦпрофили."
            },
            {
              "detail": "Заварява ъгли в пределите между 60° – 180°."
            },
            {
              "detail": "Възможност за дигитално регулиране на времето на топене, залепяне и изстиване според профила."
            },
            {
              "detail": "При всяко натискане на педала с крак се улеснява стягането на всеки профил поотделно."
            },
            {
              "detail": "При заваряване на ПВЦ профилите може да се регулира налягането на въздуха."
            },
            {
              "detail": "Машината се контролира с напълно автоматизирана програма."
            },
            {
              "detail": "Ширината на шева е 0.2 мм"
            }
          ],
          "technicalDetails": [
            {
              "key": "Максимална мощност",
              "value": "2 Kw."
            },
            {
              "key": "Стандартно напрежение",
              "value": "230 V"
            },
            {
              "key": "Честота",
              "value": "50 Hz."
            },
            {
              "key": "Въздушно налягане",
              "value": "6-8 бара"
            },
            {
              "key": "Въздушна консумация",
              "value": "7 лт./ мин"
            },
            {
              "key": "Ъгъл на заваряване",
              "value": "30° – 180°"
            },
            {
              "key": "Дължина на машината",
              "value": "750 мм."
            },
            {
              "key": "Ширина на машината",
              "value": "620 мм."
            },
            {
              "key": "Височина на машината",
              "value": "1350 мм."
            },
            {
              "key": "Тегло на машината",
              "value": "140 кг."
            },
            {
              "key": "Система за управление",
              "value": "Микрокомютър"
            }
          ]
        },
        {
          "title": "Автоматична двуглава лепачка за лепене на ПВЦ профили с нулев шев",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/DCW-01-300.jpg",
          "decription": [
            {
              "detail": "Използва се за заваряване едновременно двата ъгъла на ПВЦ профилите."
            },
            {
              "detail": "Заварява бели и цветни ПВЦпрофили"
            },
            {
              "detail": "С възможност с една операция да заварява двата ъгъла на ПВЦ профилите 2 х 90°."
            },
            {
              "detail": "С възможност при фиксирана глава да заварява ъгли в пределите между 90° – 130°."
            },
            {
              "detail": "С възможност при движеща се глава да заварява ъгли в пределите между 90° -170°."
            },
            {
              "detail": "Машината се контролира с напълно автоматизирана програма."
            },
            {
              "detail": "Дигитална контролна система за регулиране на температурата."
            },
            {
              "detail": "С възможност за регулиране на въздушното налягане."
            },
            {
              "detail": "Ширина на шева за ламиниран ПВЦ профил – 0.2mm."
            },
            {
              "detail": "Налична спирачна система"
            },
            {
              "detail": "Главатите за заваряване са лесно движими върху плъзгащите се ролки"
            }
          ],
          "technicalDetails": [
            {
              "key": "Максимална мощност",
              "value": "4 Kw."
            },
            {
              "key": "Стандартно напрежение",
              "value": "230 V"
            },
            {
              "key": "Честота",
              "value": "50 Hz."
            },
            {
              "key": "Въздушно налягане",
              "value": "6-8 бара"
            },
            {
              "key": "Въздушна консумация",
              "value": "8 лт./ мин"
            },
            {
              "key": "Минимална дължина на лепене",
              "value": "470 мм."
            },
            {
              "key": "Максимална дължина на лепене",
              "value": "3350 мм"
            },
            {
              "key": "Дължина на машината",
              "value": "4400 мм."
            },
            {
              "key": "Ширина на машината",
              "value": "760 мм."
            },
            {
              "key": "Височина на машината",
              "value": "1400 мм."
            },
            {
              "key": "Тегло на машината",
              "value": "540 кг."
            },
            {
              "key": "Система за управление",
              "value": "PLS"
            }
          ]
        },
        {
          "title": "Компресор 500 лт.",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/compresor-300.jpg",
          "decription": [
            {
              "detail": "Двубуталният 500 литров въздушен компресор е с 2 цилиндъра и въздушна помпа ABAC, която е световна известна марка с ефекивността и качеството си."
            },
            {
              "detail": "Максималното работно налягане е 12 бара.Фабрично е настроен на 9/11 бара."
            },
            {
              "detail": "Работи ефективно и при много висока температура, тъй като са използвани въздушни помпи АБАC, които са създадени с помощта на специални клапи."
            },
            {
              "detail": "Работи без вибрации и баланс."
            },
            {
              "detail": "Осигурено е допълнително охлаждане на главния блок с помощта на специално проектиран колан покровител."
            },
            {
              "detail": "Клапите са с NW марка от Италия."
            },
            {
              "detail": "Работните системи на компресора са на СТАРТ-СТОП."
            },
            {
              "detail": "Всички части на компресора са боядисани."
            }
          ],
          "technicalDetails": []
        },
        {
          "title": "Настолна Машина за Лепене",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/nastolna-300.png",
          "decription": [],
          "technicalDetails": [
            {
              "key": "Стандартно напрежение",
              "value": "230 V"
            },
            {
              "key": "Честота",
              "value": "50 Hz"
            },
            {
              "key": "Максимална мощност",
              "value": "2 Kw"
            },
            {
              "key": "Ширина",
              "value": "550 мм"
            },
            {
              "key": "Дължина",
              "value": "690 мм."
            },
            {
              "key": "Височина",
              "value": "750 мм."
            },
            {
              "key": "Тежест",
              "value": "72 кг."
            },
            {
              "key": "Система за управление",
              "value": "Микрокомпютър"
            }
          ]
        },
        {
          "title": "Преса за Алуминиева Дограма",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/presa-za-aluminiy.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Настолна Машина За Рязане на ПВЦ и Ал.Профили Ø 300 мм.",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/kesim-300.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Нaстолна Челна Фреза за Фрезоване на ПВЦ и Ал. Профили",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/PortableEndMilling-300.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Копир Фреза Настолна за ПВЦ и Ал.Профили",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/PortableCopyRouterMachine-300.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Автоматична пневматична машина за почистваане на повърхности",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/SurfaceCleaningMachine.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Апарат за механично почистване на повърхности",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/MechanicalCleaningSurface.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Длето за Почистване на Повърхности (за нулев и нормален шев)",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/richna-dleto.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Линеал (ролков за измерване)",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/lineal.jpg",
          "decription": [],
          "technicalDetails": []
        }
      ]
    },
    {
      "language": "TR",
      "detailsTabName": "Teknik detaylar",
      "descriptionTabName": "Özellikler",
      "productsMenu": "Ürünler",
      "contactsMenu": "İletişim",
      "trAddress":"Merkez ofis: Türkiye, Bursa",
      "trEmail":"info.pvc.mashini@gmail.com",
      "bgAddress":"Bulgaristan, Kırcaali",
      "bgEmail":"pvc.mashini.bulgaria@gmail.com",
      "machines": [
        {
          "title": "Kompresör 500 Lt",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/compresor-300.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Otomatik PVC ve AL orta kayıt profili alıştırma makinası (seri bıçak sistemi)",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/AMM-01-300.jpg",
          "decription": [
            {
              "detail": "PVC profillerinin orta kayıt bağlantılarının alıştırılması imkanı"
            },
            {
              "detail": "30° kadar değişik açılarda profillerin orta kayıt bağlantılarının alıştırılması imkanı"
            },
            {
              "detail": "Pnömatikprofil sıkıştırma imkanı"
            },
            {
              "detail": "Profil çeşidine göre elmas bıçak kullanımı"
            },
            {
              "detail": "Freze motorunun pnömatik silindir ile hareket ettirebilme özelliği"
            }
          ],
          "technicalDetails": [
            {
              "key": "Voltaj",
              "value": "380 V"
            },
            {
              "key": "Frekans",
              "value": "50 Hz"
            },
            {
              "key": "Toplam güç",
              "value": "1,1 Kw"
            },
            {
              "key": "Hava basıncı",
              "value": "6 – 8 bar"
            },
            {
              "key": "Hava tüketimi",
              "value": "3 lt / min"
            },
            {
              "key": "En / Boy / Yükseklik",
              "value": "670 – 610 – 1090"
            },
            {
              "key": "Ağırlık",
              "value": "105 kg"
            }
          ]
        },
        {
          "title": "Alttan çıkma PVC ve AL kesme makinası",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/MOS-01-300.jpg",
          "decription": [
            {
              "detail": "Alüminyum ve PVC profil kesme imkanı"
            },
            {
              "detail": "15°- 20°- 25°- 30°- 35°- 40°- 45° leri her iki tarafada sabitleyerek kesme imkanı sağlar"
            },
            {
              "detail": "Testere ilerleme hızı ayarlanabilir"
            },
            {
              "detail": "Testere çapı 420 mm’dir"
            },
            {
              "detail": "Pnömatik profil sıkıştırma sistemi vardır"
            },
            {
              "detail": "Rahat dönme sağlayan bilya sistemi vardır"
            },
            {
              "detail": "Alüminyum kesimler için soğutma sistemi vardır ( opsiyonel )"
            },
            {
              "detail": "Metrelik ve konveyör sistemi mevcuttur"
            }
          ],
          "technicalDetails": [
            {
              "key": "Voltaj",
              "value": "380 V"
            },
            {
              "key": "Frekans",
              "value": "50- 60 Hz"
            },
            {
              "key": "Toplam güç",
              "value": "1,5 Kw"
            },
            {
              "key": "Hava basıncı",
              "value": "6 – 8 bar"
            },
            {
              "key": "Hava tüketimi",
              "value": "10.3 lt / min"
            },
            {
              "key": "Testere çapı diameter",
              "value": "420 mm 3500 Turnover/ min"
            },
            {
              "key": "En / Boy / Yükseklik",
              "value": "850 – 670 – 1250"
            },
            {
              "key": "Ağırlık",
              "value": "210 kg"
            }
          ]
        },
        {
          "title": "Tam otomatik alttan çıkma PVC ve Aluminium profil kesim makinası (döner tablalı)",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/AOS-01-300.jpg",
          "decription": [
            {
              "detail": "Alüminyum ve PVC profil kesme imkanı"
            },
            {
              "detail": "45° – 90° – 130° otomatik olarak kesme imkanı"
            },
            {
              "detail": "15°- 20°- 25°- 30°- 35°- 40° manuel kesim imkanı sağlar"
            },
            {
              "detail": "Pnömatik profil sıkıştırma sistemi vardır"
            },
            {
              "detail": "Kumanda ile +45° ve -45° de otomatik olarak dönerek kesim yapılabilir"
            },
            {
              "detail": "Manuel çalışmada merkezde bilya üzerinde çalıştığı için kolay döndürme imkanı sağlar"
            },
            {
              "detail": "Soğutma sistemi vardır ( opsiyonel )"
            },
            {
              "detail": "Metrelik konveyör sistemi mevcuttur"
            },
            {
              "detail": "Testere ilerleme hızı ayarlanabilir"
            }
          ],
          "technicalDetails": [
            {
              "key": "Voltaj",
              "value": "380 V"
            },
            {
              "key": "Frekans",
              "value": "50 Hz"
            },
            {
              "key": "Toplam güç",
              "value": "1,5 Kw"
            },
            {
              "key": "Hava basıncı",
              "value": "6 – 8 bar"
            },
            {
              "key": "Hava tüketimi",
              "value": "4 lt / min"
            },
            {
              "key": "Testere çapı diameter",
              "value": "420 mm 3500 Turnover/ min"
            },
            {
              "key": "En / Boy / Yükseklik",
              "value": "850 – 670 – 1250"
            },
            {
              "key": "Ağırlık",
              "value": "210 kg"
            }
          ]
        },
        {
          "title": "Tam otomatik alttan çıkma PVC ve Aluminium profil kesim makinası ( NC Kontrollü )",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/COS-01-300.jpg",
          "decription": [
            {
              "detail": "Alüminyum ve PVC profil kesme imkanı"
            },
            {
              "detail": "45° ile 135° arasında otomatik olarak kesme imkanı"
            },
            {
              "detail": "Kestiği tarafa dönme özelliği vardır"
            },
            {
              "detail": "45° ile 135° kestikten sonra tekrar 45° döner özelliği"
            },
            {
              "detail": "Soğutma tertibatı vardır"
            },
            {
              "detail": "Elmas testere çapı 420 mm’dir"
            },
            {
              "detail": "Metrelik konveyör sistemi mevcuttur"
            },
            {
              "detail": "Testere ilerleme hızı ayarlanabilir"
            }
          ],
          "technicalDetails": [
            {
              "key": "Voltaj",
              "value": "380 V"
            },
            {
              "key": "Frekans",
              "value": "50- 60 Hz"
            },
            {
              "key": "Toplam güç",
              "value": "1,5 Kw"
            },
            {
              "key": "Hava basıncı",
              "value": "6 – 8 bar"
            },
            {
              "key": "Hava tüketimi",
              "value": "10.3 lt / min"
            },
            {
              "key": "Testere çapı diameter",
              "value": "420 mm 3500 Turnover/ min"
            },
            {
              "key": "En / Boy / Yükseklik",
              "value": "950 – 740 – 1300"
            },
            {
              "key": "Ağırlık",
              "value": "260 kg"
            }
          ]
        },
        {
          "title": "Otomatik PVC ve Alüminyum çift köşe kesim makinası",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/DCC-01-300.jpg",
          "decription": [
            {
              "detail": "PVC ve alüminyum profillerin 45° – 90° ve ara derecelerde çift taraflı hassas kesiminin ayarları kontrol panelindeki LCD ekran üzerinden yapılır"
            },
            {
              "detail": "Otomatik dijital pozisyonlama"
            },
            {
              "detail": "LCD kontrol paneli"
            },
            {
              "detail": "PLC kontrol sistemi"
            },
            {
              "detail": "Kesim adedi ve ölçüsünü içeren 20 farklı program hafıza kapasitesi"
            },
            {
              "detail": "Emniyetli kesim kapakları pnömatik sistemi ile otomatik olarak çalışır"
            },
            {
              "detail": "Her iki kafada hareketlidir ve birbirinden bağımsız olarak 45° ya da 90° de kesim yapmak üzere hareket edebilir"
            },
            {
              "detail": "Kesim kafaları arasında profil destekleme ünitesi"
            },
            {
              "detail": "Alüminyum profil kesimi için soğutma sistemi"
            },
            {
              "detail": "Alüminyum takoz dilimleme programı"
            },
            {
              "detail": "Kafa hareketleri vidalı mil ve somun ile kesme hassasiyeti 0,1mm’dir"
            }
          ],
          "technicalDetails": [
            {
              "key": "Voltaj",
              "value": "380 V"
            },
            {
              "key": "Frekans",
              "value": "50 Hz"
            },
            {
              "key": "Toplam güç",
              "value": "6,5 Kw"
            },
            {
              "key": "Hava basıncı",
              "value": "6 – 8 bar"
            },
            {
              "key": "Hava tüketimi",
              "value": "50 lt / min"
            },
            {
              "key": "Testere çapı diameter",
              "value": "450 mm"
            },
            {
              "key": "En / Boy / Yükseklik",
              "value": "4040 – 1140 – 1150"
            },
            {
              "key": "Ağırlık",
              "value": "710 kg"
            },
            {
              "key": "Sehpa uzunluğu",
              "value": "2000 mm"
            },
            {
              "key": "Kontrol sistemi",
              "value": "PLC"
            }
          ]
        },
        {
          "title": "Tam otomatik PVC çıta kesme makinası",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/ABS-01-300.jpg",
          "decription": [
            {
              "detail": "PVC çıta profillerinin 45° kesim imkanı"
            },
            {
              "detail": "Otomatik çalışma sistemi"
            },
            {
              "detail": "Uzun çerçeveler için metrajlı konveyör sistemi ve ayarlanabilir uzunluk stoperi"
            },
            {
              "detail": "Ayarlanabilir kesme hızı"
            },
            {
              "detail": "Pnömatik profil sıkıştırma sistemi"
            },
            {
              "detail": "Testere çapı 125-200 mm"
            }
          ],
          "technicalDetails": [
            {
              "key": "Voltaj",
              "value": "380 V"
            },
            {
              "key": "Frekans",
              "value": "50 Hz"
            },
            {
              "key": "Toplam güç",
              "value": "1,5 Kw"
            },
            {
              "key": "Hava basıncı",
              "value": "6 – 8 bar"
            },
            {
              "key": "Hava tüketimi",
              "value": "8 lt / min"
            },
            {
              "key": "Testere çapı – diameter",
              "value": "200 mm – 125 mm"
            },
            {
              "key": "En / Boy / Yükseklik",
              "value": "470 – 1140 – 1130"
            },
            {
              "key": "Ağırlık",
              "value": "115 kg"
            }
          ]
        },
        {
          "title": "Otomatik köşe temizleme makinası (Seri Bıçak Değiştirme)",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/ACC-01-300.jpg",
          "decription": [
            {
              "detail": "PVC profillerin kaynak sonrası alt-üst yüzey temizliği ve motorlara takılan bıçaklar sayesinde alın kaynak çapaklarını almak için uygundur"
            },
            {
              "detail": "Bir motor ile 2-4-6-8-10 bıçak bağlama imkanı"
            },
            {
              "detail": "Acil stop kullanımı durumunda bıçaklar geri dönmeden pres profili bırakmaz"
            },
            {
              "detail": "Otomasyon grubundaki ekran olası teknik arızaları yazılı olarak bildirir"
            }
          ],
          "technicalDetails": [
            {
              "key": "Voltaj",
              "value": "380 V"
            },
            {
              "key": "Frekans",
              "value": "50 Hz"
            },
            {
              "key": "Toplam güç",
              "value": "1.5 Kw"
            },
            {
              "key": "Hava basıncı",
              "value": "6 – 8 bar"
            },
            {
              "key": "Havatüketimi",
              "value": "7 lt / min"
            },
            {
              "key": "En / Boy / Yükseklik",
              "value": "800 – 1100 – 1600"
            },
            {
              "key": "Ağırlık",
              "value": "255kg"
            },
            {
              "key": "Kontrol sistemi",
              "value": "Microcomputer"
            }
          ]
        },
        {
          "title": "Otomatik üçlü kol yeri ve su tahliye makinası",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/AMD-01-300.jpg",
          "decription": [
            {
              "detail": "PVC profillerinin kilit yerleri, menteşe yarıkları, kol yeri delikleri ve su tahliye kanalı açılması imkanı"
            },
            {
              "detail": "Kopya kafasının düşey eksende çalışma özelliği"
            },
            {
              "detail": "Üçlü delme sisteminin yatay eksende çalışma özelliği"
            },
            {
              "detail": "Su tahliye sisteminin açılı pozisyonda çalışma özelliği"
            },
            {
              "detail": "Universal şablon ( isteğe bağlı şablon yapabilme imkanı )"
            },
            {
              "detail": "Üçlü delme, kopya freze yada kanal açma sisteminin tek olarak çalışabilme imkanı"
            },
            {
              "detail": "Pnömatik profil sıkıştırma sistemi"
            }
          ],
          "technicalDetails": [
            {
              "key": "Voltaj",
              "value": "380 V"
            },
            {
              "key": "Frekans",
              "value": "50 Hz"
            },
            {
              "key": "Toplam güç",
              "value": "1,3 Kw"
            },
            {
              "key": "Hava basıncı",
              "value": "6 – 8 bar"
            },
            {
              "key": "Hava tüketimi",
              "value": "3 lt / min"
            },
            {
              "key": "Testere çapı diameter",
              "value": "420 mm"
            },
            {
              "key": "En / Boy / Yükseklik",
              "value": "650 – 1000 – 1350"
            },
            {
              "key": "Ağırlık",
              "value": "120 kg"
            }
          ]
        },
        {
          "title": "Otomatik tek köşe PVC profil sıfır kaynak makinası",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/SCW-001-300.jpg",
          "decription": [
            {
              "detail": "PVC profillerinin köşelerinin birleştirilmesi imkanı"
            },
            {
              "detail": "Beyaz ve renkli profilleri kaynatma imkanı"
            },
            {
              "detail": "Kaynak açıları 60° – 180° arasında ayarlanabilme özelliği"
            },
            {
              "detail": "Isıtma ve bekletme zamanları için dijital ayarlama imkanı"
            },
            {
              "detail": "Ayak pedalına her basışta profilleri ayrı ayrı sıkıştırma kolaylığı"
            },
            {
              "detail": "Kaynak ve profil basıncını ayar imkanı"
            },
            {
              "detail": "Kaynak aralığı 0,2mm’ dir"
            }
          ],
          "technicalDetails": [
            {
              "key": "Voltaj",
              "value": "230 V"
            },
            {
              "key": "Frekans",
              "value": "50 Hz"
            },
            {
              "key": "Toplam güç",
              "value": "2 Kw"
            },
            {
              "key": "Hava basıncı",
              "value": "6 – 8 bar"
            },
            {
              "key": "Hava tüketimi",
              "value": "7 lt / min"
            },
            {
              "key": "Kaynak açısı",
              "value": "30° – 180°"
            },
            {
              "key": "En / Boy / Yükseklik",
              "value": "620 – 750 – 1350 mm"
            },
            {
              "key": "Ağırlık",
              "value": "140 kg"
            },
            {
              "key": "Kontrol sistemi",
              "value": "Microcomputer"
            }
          ]
        },
        {
          "title": "Otomatik çift köşe PVC profil sıfır kaynak makinası",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/DCW-01-300.jpg",
          "decription": [
            {
              "detail": "PVC profillerin aynı anda iki köşesini kaynatabilme özelliği"
            },
            {
              "detail": "Beyaz veya renkli profil kaynatma özelliği"
            },
            {
              "detail": "2 köşeyi bir opeasyonda kaynatabilme özelliği 2 x 90°"
            },
            {
              "detail": "90°den 130° ye kadar kaynak yapabilme özelliği"
            },
            {
              "detail": "Hareketli kafada 90° den 170° ye kadar kaynak yapabilme özelliği"
            },
            {
              "detail": "Otomatik program kontrol sistemi"
            },
            {
              "detail": "Digital ısı kontrol sistemi"
            },
            {
              "detail": "Basınç ayarlama özelliği"
            },
            {
              "detail": "Kaplama profiler için 0,2mm kaynak özelliği"
            },
            {
              "detail": "Frenleme sistemi"
            },
            {
              "detail": "Kayıcı rulmanlar üzerinde kolay hareket"
            }
          ],
          "technicalDetails": [
            {
              "key": "Voltaj",
              "value": "230 V"
            },
            {
              "key": "Frekans",
              "value": "50 Hz"
            },
            {
              "key": "Toplam güç",
              "value": "4 Kw"
            },
            {
              "key": "Hava basıncı",
              "value": "6 –8 bar"
            },
            {
              "key": "Hava tüketimi",
              "value": "8 lt / min"
            },
            {
              "key": "Minimum kaynak uzunluğu",
              "value": "470 mm"
            },
            {
              "key": "Maximum kaynak uzunluğu",
              "value": "3350 mm"
            },
            {
              "key": "En / Boy / Yükseklik",
              "value": "760 – 4400 – 1400"
            },
            {
              "key": "Ağırlık",
              "value": "540 kg"
            },
            {
              "key": "Kontrol sistemi",
              "value": "PLC"
            }
          ]
        },
        {
          "title": "Masaüstü Kaynak Makinası",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/nastolna-300.png",
          "decription": [],
          "technicalDetails": [
            {
              "key": "Masaüstü",
              "value": "Kaynak Makinası"
            },
            {
              "key": "Gerilim",
              "value": "230 V"
            },
            {
              "key": "Frekans",
              "value": "50 Hz"
            },
            {
              "key": "Toplam güç",
              "value": "2 Kw"
            },
            {
              "key": "En",
              "value": "550 mm."
            },
            {
              "key": "Boy",
              "value": "690 mm."
            },
            {
              "key": "Yükseklik",
              "value": "750 mm."
            },
            {
              "key": "Makina Ağırlığı",
              "value": "72 kg."
            },
            {
              "key": "Kontrol sistemi",
              "value": "Microcomputer"
            }
          ]
        },
        {
          "title": "Alüminyum Köşe Birleştirme Presi",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/presa-za-aluminiy.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Portatif PVC ve Al. Profil Kesim Makinası Ø 300 mm",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/kesim-300.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Portatif PVC ve Alüminyum Orta Kayıt Alıştırma Makinası",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/PortableEndMilling-300_8336.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Portatif PVC ve Alüminyum Profil Kopya Freze Makinası",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/PortableCopyRouterMachine-300.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Otomatik Tek Yüzey Temizleme Makinesi",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/SurfaceCleaningMachine.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Mekanik Yüzey Temizleme Aleti",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/MechanicalCleaningSurface.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Yüzey Temizleme Aleti",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/richna-dleto.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Konveyör",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/lineal.jpg",
          "decription": [],
          "technicalDetails": []
        }
      ]
    },
    {
      "language": "RU",
      "detailsTabName": "Характеристики",
      "descriptionTabName": "Описание",
      "productsMenu": "Продукты",
      "contactsMenu": "Контакты",
      "trAddress":"Головной офис: Турция, Бурса",
      "trEmail":"info.pvc.mashini@gmail.com",
      "bgAddress":"Болгария, Кырджали",
      "bgEmail":"pvc.mashini.bulgaria@gmail.com",
      "machines": [
        {
          "title": "Автоматический станок для фрезования торцов импостного ПВХ и АL профилей (система быстрой замены фрезы)",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/AMM-01-300.jpg",
          "decription": [
            {
              "detail": "Применяется для фрезерования торцов импостного профиля из ПВХ"
            },
            {
              "detail": "Торцевая выборка острых углов до 30 гр."
            },
            {
              "detail": "Установка инструментов с помощью пневматических подающих цилиндров"
            },
            {
              "detail": "В зависимости от профиля, может быть использован алмазный нож"
            },
            {
              "detail": "Вертикальная пневматическая система зажима профиля обеспечивает оптимальное крепление заготовки"
            },
            {
              "detail": "Подача фрезы осуществляется пневмоцилиндром"
            }
          ],
          "technicalDetails": [
            {
              "key": "Напряжение",
              "value": "380 В"
            },
            {
              "key": "Частота",
              "value": "50 Гц"
            },
            {
              "key": "Общая мощность",
              "value": "1,1 кВт"
            },
            {
              "key": "Давление воздуха",
              "value": "6-8 бар"
            },
            {
              "key": "Потребление воздуха",
              "value": "3 л/мин"
            },
            {
              "key": "Ширина – Длина – Высота",
              "value": "670-610-1090"
            },
            {
              "key": "Вес станка",
              "value": "105 кг"
            }
          ]
        },
        {
          "title": "Автоматическая oдноголовочная пиле для автоматическойрезки ПВХ и АL профилей с нижней подачей пильного диска",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/MOS-01-300.jpg",
          "decription": [
            {
              "detail": "Пила по распилке алюминия и ПВХ профиля"
            },
            {
              "detail": "Возможность резки углов вправо и влево по стандартам 150 – 200 — 250 – 300 — 350- 400- 450"
            },
            {
              "detail": "Регулируемая скорость подачи диска"
            },
            {
              "detail": "Диаметр пильного диска 420 мм"
            },
            {
              "detail": "Пневматическая система зажима профиля"
            },
            {
              "detail": "Удобная поворотная основа рабочего стола"
            },
            {
              "detail": "Система охлаждения пильного диска при работе с алюминиевыми профилями (опционно)"
            },
            {
              "detail": "Конвейерная система замера"
            }
          ],
          "technicalDetails": [
            {
              "key": "Напряжение",
              "value": "380 В"
            },
            {
              "key": "Частота",
              "value": "50-60 Гц"
            },
            {
              "key": "Общая мощность",
              "value": "1,5 кВт"
            },
            {
              "key": "Давление воздуха",
              "value": "6-8бар"
            },
            {
              "key": "Потребление воздуха",
              "value": "10,3 л/мин"
            },
            {
              "key": "Диаметр пильного диска",
              "value": "420 мм 3500 оборотов/мин"
            },
            {
              "key": "Ширина – Длина – Высота",
              "value": "850-670-1250"
            },
            {
              "key": "Вес станка",
              "value": "210 кг"
            }
          ]
        },
        {
          "title": "Автоматическая одноголовочная пиле для автоматической резки ПВХ и АL профилей с нижней подачей пилнього диска (с поворотный доски)",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/AOS-01-300.jpg",
          "decription": [
            {
              "detail": "Автоматическая пила по распилке алюминия и ПВХ профиля"
            },
            {
              "detail": "Автоматическая резка профиля под углами 450 – 900 — 1300"
            },
            {
              "detail": "Ручное изменение углов реза 15°- 20°- 25°- 30°- 35°- 40°"
            },
            {
              "detail": "Пневматическая система зажима профиля"
            },
            {
              "detail": "Установка угла резки профиля как в автоматическом, так и в ручном режиме в диапазоне углов +450-450"
            },
            {
              "detail": "Удобная поворотная основа рабочего стола"
            },
            {
              "detail": "Система охлаждения (опционно)"
            },
            {
              "detail": "Конвейерная система замера"
            },
            {
              "detail": "Регулируемая скорость подачи диска"
            }
          ],
          "technicalDetails": [
            {
              "key": "Напряжение",
              "value": "380 В"
            },
            {
              "key": "Частота",
              "value": "50 Гц"
            },
            {
              "key": "Общая мощность",
              "value": "1,5 кВт"
            },
            {
              "key": "Давление воздуха",
              "value": "6-8 бар"
            },
            {
              "key": "Потребление воздуха",
              "value": "4 л/мин"
            },
            {
              "key": "Диаметр пильного диска",
              "value": "420 мм 3500 оборотов/мин"
            },
            {
              "key": "Ширина – Длина – Высота",
              "value": "850-670-1250"
            }
          ]
        },
        {
          "title": "Автоматическая одноголовочная пиле для автоматической резки ПВХ и АL профилей с нижней подачей пилнього диска ( с NC контролируемым)",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/COS-01-300.jpg",
          "decription": [
            {
              "detail": "Автоматическая пила по распилке алюминия и ПВХ профиля"
            },
            {
              "detail": "Автоматическая резка под углами 450-1350"
            },
            {
              "detail": "Возвращение пилы из конечной точки процесса в изначальную по завершению процесса фрезерования"
            },
            {
              "detail": "Функция возврата к 450 после завершения резки под углом450 и 1350"
            },
            {
              "detail": "Система охлаждения"
            },
            {
              "detail": "Диаметр диска с алмазными напайка ми 420 мм"
            },
            {
              "detail": "Конвейерная система замера"
            },
            {
              "detail": "Регулируемая скорость подачи диска"
            }
          ],
          "technicalDetails": [
            {
              "key": "Напряжение",
              "value": "380 В"
            },
            {
              "key": "Частота",
              "value": "50-60 Гц"
            },
            {
              "key": "Общая мощность",
              "value": "1,5 кВт"
            },
            {
              "key": "Давление воздуха",
              "value": "6-8 бар"
            },
            {
              "key": "Потребление воздуха",
              "value": "10,3 л/мин"
            },
            {
              "key": "Диаметр пильного диска",
              "value": "420 мм 3500 оборотов/мин"
            },
            {
              "key": "Ширина – Длина – Высота",
              "value": "950-740-1300"
            },
            {
              "key": "Вес станка",
              "value": "260 кг"
            }
          ]
        },
        {
          "title": "Автоматическая двухголовочная пила для автоматической резки ПВХ и АL профилей",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/DCC-01-300.jpg",
          "decription": [
            {
              "detail": "Резка алюминиевых и ПВХ профилей под углом 450-900 при помощи пульта управления, оснащенным LCD-дисплеем"
            },
            {
              "detail": "Автоматическое позиционирование"
            },
            {
              "detail": "LCD дисплей"
            },
            {
              "detail": "Система управления PLC"
            },
            {
              "detail": "Функция запоминания до 20 программ резов"
            },
            {
              "detail": "Кожухи пильных дисков с автоматическим пневматическим опусканием при закрытии прижимов."
            },
            {
              "detail": "Обе головки подвижные и могут независимо друг от друга выполнять резку под углом 450 или 900"
            },
            {
              "detail": "Межголовочная опора для поддержки профиля"
            },
            {
              "detail": "Система охлаждения для резки алюминиевого профиля"
            },
            {
              "detail": "Оптическая система измерения длины, обеспечивающая точность выполнения реза ± 0,1 мм"
            }
          ],
          "technicalDetails": [
            {
              "key": "Напряжение",
              "value": "380 В"
            },
            {
              "key": "Частота",
              "value": "50 Гц"
            },
            {
              "key": "Общая мощность",
              "value": "6,5 кВт"
            },
            {
              "key": "Давление воздуха",
              "value": "6-8 бар"
            },
            {
              "key": "Потребление воздуха",
              "value": "50 л/мин"
            },
            {
              "key": "Диаметр пильного диска",
              "value": "450 мм"
            },
            {
              "key": "Ширина – Длина – Высота",
              "value": "4040-1140-1150"
            },
            {
              "key": "Вес станка",
              "value": "710 кг"
            },
            {
              "key": "Длина металлической подставки",
              "value": "2000 мм"
            },
            {
              "key": "Система управления",
              "value": "ПЛК"
            }
          ]
        },
        {
          "title": "Автоматический станок для резки штапикa из ПВХ профиля",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/ABS-01-300.jpg",
          "decription": [
            {
              "detail": "Резка штапика под углом 450"
            },
            {
              "detail": "Автоматический режим работы"
            },
            {
              "detail": "Одновременная резка двух штапиков"
            },
            {
              "detail": "Конвейерная система с измерительным устройством и фиксатором"
            },
            {
              "detail": "Регулируемая скорость резки"
            },
            {
              "detail": "Пневматическая система зажима"
            },
            {
              "detail": "Диаметр пильного диска 125-200 мм"
            }
          ],
          "technicalDetails": [
            {
              "key": "Напряжение",
              "value": "350 В"
            },
            {
              "key": "Частота",
              "value": "50 Гц"
            },
            {
              "key": "Общая мощность",
              "value": "1,5 кВт"
            },
            {
              "key": "Давление воздуха",
              "value": "6-8 бар"
            },
            {
              "key": "Потребление воздуха",
              "value": "8 л/мин"
            },
            {
              "key": "Диаметр пильного диска",
              "value": "125-200 мм"
            },
            {
              "key": "Ширина – Длина – Высота",
              "value": "470-1140-1130"
            },
            {
              "key": "Вес станка",
              "value": "115 кг"
            }
          ]
        },
        {
          "title": "Автоматический углозачистной станок для пластиковых окон и дверей  (система быстрой замены фрезы)",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/ACC-01-300.jpg",
          "decription": [
            {
              "detail": "Подходит для зачистки нижней, верхней и внешней угловой поверхности профилей после сварки"
            },
            {
              "detail": "2-4-6-8-10 группы ножей расположены на одном диске"
            },
            {
              "detail": "Система автоматического распознавания ножей"
            },
            {
              "detail": "При аварийном отключении разжатие профиля присходит только после возврата ножей"
            },
            {
              "detail": "Информация о возможных технических сбоях отображается на цифровой панели"
            }
          ],
          "technicalDetails": [
            {
              "key": "Напряжение",
              "value": "380 В"
            },
            {
              "key": "Частота",
              "value": "50 Гц"
            },
            {
              "key": "Общая мощность",
              "value": "1,5 кВт"
            },
            {
              "key": "Давление воздуха",
              "value": "6-8 бар"
            },
            {
              "key": "Потребление воздуха",
              "value": "7 л/мин"
            },
            {
              "key": "Ширина – Длина – Высота",
              "value": "800-1100-1600"
            },
            {
              "key": "Вес станка",
              "value": "255кг"
            },
            {
              "key": "Система управления",
              "value": "Микрокомпьютер"
            }
          ]
        },
        {
          "title": "Автоматический Трехшпиндельный копировально-фрезерный Станок Для Фрезерования  Водоотливных Каналов для ПВЦ и АL профилей",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/AMD-01-300.jpg",
          "decription": [
            {
              "detail": "Обработка водоотливных каналов, отверстий под ручку, отверстий под личинку в ПВХ профиле"
            },
            {
              "detail": "Функционирование верхнего агрегата в вертикальном состоянии"
            },
            {
              "detail": "Функционирование 3 фрезы в горизонтальном положении"
            },
            {
              "detail": "Фрезерование осуществляется под различными углами наклона"
            },
            {
              "detail": "Универсальный копир (шаблон) — возможность изготовления копира под ваш заказ"
            },
            {
              "detail": "Возможность независимой работы каждого из моторов"
            },
            {
              "detail": "Пневматическая система зажима профиля"
            }
          ],
          "technicalDetails": [
            {
              "key": "Напряжение",
              "value": "380 В"
            },
            {
              "key": "Частота",
              "value": "50 Гц"
            },
            {
              "key": "Общая мощность",
              "value": "1,3 кВт"
            },
            {
              "key": "Давление воздуха",
              "value": "6-8 бар"
            },
            {
              "key": "Потребление воздуха",
              "value": "3 л/мин"
            },
            {
              "key": "Диаметр пильного диска",
              "value": "420 мм."
            },
            {
              "key": "Ширина – Длина – Высота",
              "value": "650-1000-1350"
            },
            {
              "key": "Вес станка",
              "value": "120 кг"
            }
          ]
        },
        {
          "title": "Автоматический одногoловочный станок для сварки ПВХ профиля с нулевой шов",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/SCW-001-300.jpg",
          "decription": [
            {
              "detail": "Станок предназначен для сварки углов профиля ПВХ"
            },
            {
              "detail": "Сварка белых и цветных ПВХ профилей"
            },
            {
              "detail": "Сварка профиля под углами в пределах от 60° до 180°"
            },
            {
              "detail": "Цифровая регулировка продолжительности и температуры сварки"
            },
            {
              "detail": "Педальное управление прижимами профиля"
            },
            {
              "detail": "Возможность регулировать сварку и давление сжимания сварки"
            },
            {
              "detail": "Регулируемая ширина сварочного шва 0,2 мм"
            }
          ],
          "technicalDetails": [
            {
              "key": "Напряжение",
              "value": "230 В"
            },
            {
              "key": "Частота",
              "value": "50 Гц"
            },
            {
              "key": "Общая мощность",
              "value": "2 кВт"
            },
            {
              "key": "Давление воздуха",
              "value": "6-8 бар"
            },
            {
              "key": "Потребление воздуха",
              "value": "7 л/мин"
            },
            {
              "key": "Угол сварки",
              "value": "300 — 1800"
            },
            {
              "key": "Ширина – Длина – Высота",
              "value": "620-750-1350"
            },
            {
              "key": "Вес станка",
              "value": "140 кг"
            },
            {
              "key": "Система управления",
              "value": "Микрокомпьютер"
            }
          ]
        },
        {
          "title": "Aвтоматический двухголовочный станок для сварки ПВХ профиля с нулевой шов",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/DCW-01-300.jpg",
          "decription": [
            {
              "detail": "Одновременная сварка двух углов любых ПВХ профилей"
            },
            {
              "detail": "Сварка белых и цветных ПВХ профилей"
            },
            {
              "detail": "Одновременная сварка двух углов 900"
            },
            {
              "detail": "Возможность сварки под углами от 900 до 1300 при фиксированной голове"
            },
            {
              "detail": "Возможность сварки под углами от 900 до 1700 при подвижной голове"
            },
            {
              "detail": "Автоматическая система управления"
            },
            {
              "detail": "Автоматическоеуправление температурой при помощи цифрового терморегулятора"
            },
            {
              "detail": "Функция регулировки давления"
            },
            {
              "detail": "Ширина шва для ламинированного профиля – 0,2 мм"
            },
            {
              "detail": "Наличие тормозной системы"
            },
            {
              "detail": "Правая сварочная голова двигается на скользящих подшипниках"
            }
          ],
          "technicalDetails": [
            {
              "key": "Напряжение",
              "value": "230 В"
            },
            {
              "key": "Частота",
              "value": "50 Гц"
            },
            {
              "key": "Общая мощность",
              "value": "4 кВт"
            },
            {
              "key": "Давление воздуха",
              "value": "6-8 бар"
            },
            {
              "key": "Потребление воздуха",
              "value": "8 л/мин"
            },
            {
              "key": "Минимальная длина сварки",
              "value": "470 мм"
            },
            {
              "key": "Максимальная длина сварки",
              "value": "3350 мм"
            },
            {
              "key": "Ширина – Длина – Высота",
              "value": "760-4400-1400"
            },
            {
              "key": "Вес станка",
              "value": "540 кг"
            },
            {
              "key": "Система управления",
              "value": "ПЛК"
            }
          ]
        },
        {
          "title": "Компрессор 500 лт.",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/compresor-300.jpg",
          "decription": [
            {
              "detail": "Двухбутальный 500-литровый воздушный компрессор с 2 цилиндрамии  воздушным насосом марки АВАС, которая является всемирно известной по   эффективности и качеству;"
            },
            {
              "detail": "Максимальное рабочее давление — 12 бар; фабричная настройка —   9/12 бар.;"
            },
            {
              "detail": "Работает эффективно и при очень высоких температурах, т.к.   использованы воздушные помпы АВАС, которые созданы с помощью   специальных клапанов;"
            },
            {
              "detail": "Работает без вибрации и баланса;"
            },
            {
              "detail": "Обеспечено дополнительное охлаждение главного блока с помощью   специально спроектированного пояса покровителя;"
            },
            {
              "detail": "Клапаны марки NW— Италия;"
            },
            {
              "detail": "Рабочие системы компрессора на СТАРТ-СТОП;"
            },
            {
              "detail": "Все части компрессора окрашены."
            }
          ],
          "technicalDetails": []
        },
        {
          "title": "Настольный Сварочный Станок",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/nastolna-300.png",
          "decription": [],
          "technicalDetails": [
            {
              "key": "Стандартное напряжение",
              "value": "230 V"
            },
            {
              "key": "Частота",
              "value": "50 Hz"
            },
            {
              "key": "Общая мощность",
              "value": "2 Kw"
            },
            {
              "key": "Ширина",
              "value": "550 мм"
            },
            {
              "key": "Длина",
              "value": "690 мм."
            },
            {
              "key": "Высота",
              "value": "750 мм."
            },
            {
              "key": "Вес станка",
              "value": "72 кг."
            },
            {
              "key": "Система за управления",
              "value": "Микрокомпьютера"
            }
          ]
        },
        {
          "title": "Настолный Пресс Для Алюминиевых окон",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/presa-za-aluminiy.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Портативный Станок Для Распиливания на ПВХ и Ал.Профилей Ø 300 мм.",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/kesim-300.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Портативный Станок Для Фрезеровки Торца Импоста для ПВХ и Ал.профилей",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/PortableEndMilling-300.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Портативный копировально-фрезерный станок для ПВХ и Ал.профилей",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/PortableCopyRouterMachine-300.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Автоматический Cтанок Для Зачистки С варочных швов",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/SurfaceCleaningMachine.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Механический Аппарат Для Зачистки Сварочных Углов",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/MechanicalCleaningSurface.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Стамеска Для Зачистки Сварочного Шва",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/richna-dleto.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Конвейер (измерительный рольганг)",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/lineal.jpg",
          "decription": [],
          "technicalDetails": []
        }
      ]
    },
    {
      "language": "SR",
      "detailsTabName": "Tehnički detalji",
      "descriptionTabName": "Opis",
      "productsMenu": "Proizvodi",
      "contactsMenu": "Kontakti",
      "trAddress":"Glavni ured: Turska, Bursa",
      "trEmail":"info.pvc.mashini@gmail.com",
      "bgAddress":"Bulgaria, Kardzhali",
      "bgEmail":"pvc.mashini.bulgaria@gmail.com",
      "machines": [
        {
          "title": "Ceona freza za obradu T prečke",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/AMM-01-300.jpg",
          "decription": [
            {
              "detail": "Upotrebljava se za jedmovremeno formiranje dva razlicitih vida profila"
            },
            {
              "detail": "Masina radi automatski i formira profil"
            },
            {
              "detail": "Radi jednovremeno sa dva alata za dva profila"
            },
            {
              "detail": "Upotrbljava se za jednovremeno formiranje na dva razlicna profila"
            }
          ],
          "technicalDetails": [
            {
              "key": "MAKSIMALNA SNAGA",
              "value": "1,1 KW"
            },
            {
              "key": "STANDARDNO NAPAJANJE",
              "value": "380 V"
            },
            {
              "key": "FREKFENCIJA",
              "value": "50 Hz"
            },
            {
              "key": "PRITISAK VAZDUHA",
              "value": "6 bari"
            },
            {
              "key": "POTROSNJA VAZDUHA",
              "value": "8,5 lit./min"
            },
            {
              "key": "DUZINA MASINE",
              "value": "670 mm"
            },
            {
              "key": "SIRINA MASINE",
              "value": "610 mm"
            },
            {
              "key": "VISINA MASINE",
              "value": "1090 mm"
            },
            {
              "key": "TEZINA MASINE",
              "value": "105 kg."
            }
          ]
        },
        {
          "title": "Mašina jednoglava za sečenje PVC I ALU profila",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/MOS-01-300.jpg",
          "decription": [
            {
              "detail": "Upotrbljava se za rezanje na PVC i AL profila"
            },
            {
              "detail": "Rezanje PVC i AL profila radi sa obe strane, moze se regulisati stepen od – 45 do + 45 po zelji"
            },
            {
              "detail": "Mogucnost za regulisanje podizanja pile od cirkulara"
            },
            {
              "detail": "Masina pneumatski steze profil i sa obe strane ima metrovni pokazatel."
            },
            {
              "detail": "Specijalni granicnik za zeljenu meru"
            },
            {
              "detail": "Pri otvaranju gornog poklopca masina se isklucuje avtomatski"
            },
            {
              "detail": "Vazdusni pistolj za ciscenje masine"
            }
          ],
          "technicalDetails": [
            {
              "key": "MAKSIMALNA SNAGA",
              "value": "1,5 KW"
            },
            {
              "key": "STANDARDNO NAPAJANJE",
              "value": "380 V"
            },
            {
              "key": "FREKFENCIJA",
              "value": "50 Hz"
            },
            {
              "key": "PRITISAK VAZDUHA",
              "value": "6-8 bari"
            },
            {
              "key": "POTROSNJA VAZDUHA",
              "value": "10.3 lit./min"
            },
            {
              "key": "TESTERA",
              "value": "420 mm./3500 ob/min"
            },
            {
              "key": "DUZINA MASINE",
              "value": "850 mm"
            },
            {
              "key": "SIRINA MASINE",
              "value": "670 mm"
            },
            {
              "key": "VISINA MASINE",
              "value": "1250 mm"
            },
            {
              "key": "TEZINA MASINE",
              "value": "210 kg."
            }
          ]
        },
        {
          "title": "Mašina za sečenje PVC I ALU profila",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/AOS-01-300.jpg",
          "decription": [
            {
              "detail": "Upotrbljava se za rezanje na PVC i AL profila"
            },
            {
              "detail": "Rezanje PVC i AL profila radi sa obe strane, moze se regulisati stepen od – 45 do + 45 po zelji"
            },
            {
              "detail": "Mogucnost za regulisanje podizanja pile od cirkulara"
            },
            {
              "detail": "Masina pneumatski steze profil i sa obe strane ima metrovni pokazatel."
            },
            {
              "detail": "Specijalni granicnik za zeljenu meru"
            },
            {
              "detail": "Pri otvaranju gornog poklopca masina se isklucuje avtomatski"
            },
            {
              "detail": "Vazdusni pistolj za ciscenje masine"
            },
            {
              "detail": "Promjer lista ø 420 mm"
            }
          ],
          "technicalDetails": [
            {
              "key": "MAKSIMALNA SNAGA",
              "value": "1,5 KW"
            },
            {
              "key": "STANDARDNO NAPAJANJE",
              "value": "380 V"
            },
            {
              "key": "FREKFENCIJA",
              "value": "50 Hz"
            },
            {
              "key": "PRITISAK VAZDUHA",
              "value": "6-8 bari"
            },
            {
              "key": "POTROSNJA VAZDUHA",
              "value": "10.3 lit./min"
            },
            {
              "key": "TESTERA",
              "value": "420 mm./ 3500 ob./min"
            },
            {
              "key": "DUZINA MASINE",
              "value": "850 mm"
            },
            {
              "key": "SIRINA MASINE",
              "value": "670 mm"
            },
            {
              "key": "VISINA MASINE",
              "value": "1250mm"
            },
            {
              "key": "TEZINA MASINE",
              "value": "210 kg."
            }
          ]
        },
        {
          "title": "Mašina jednoglava za sečenje PVC I ALU profila",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/COS-01-300.jpg",
          "decription": [
            {
              "detail": "Upotrbljava se za rezanje na PVC i AL profila"
            },
            {
              "detail": "Rezanje PVC i AL profila radi sa obe strane, moze se regulisati stepen od – 45 do + 45 po zelji"
            },
            {
              "detail": "Mogucnost za regulisanje podizanja pile od cirkulara"
            },
            {
              "detail": "Masina pneumatski steze profil i sa obe strane ima metrovni pokazatel."
            },
            {
              "detail": "Specijalnigranicnik za zeljenu meru"
            },
            {
              "detail": "Pri otvaranju gornog poklopca masina se isklucuje avtomatski"
            },
            {
              "detail": "Vazdusni pistolj za ciscenje masine"
            }
          ],
          "technicalDetails": [
            {
              "key": "MAKSIMALNA SNAGA",
              "value": "1,5 KW"
            },
            {
              "key": "STANDARDNO NAPAJANJE",
              "value": "380 V"
            },
            {
              "key": "FREKFENCIJA",
              "value": "50 Hz"
            },
            {
              "key": "PRITISAK VAZDUHA",
              "value": "6-8 bari"
            },
            {
              "key": "POTROSNJA VAZDUHA",
              "value": "10.3 lit./min"
            },
            {
              "key": "TESTERA",
              "value": "420 mm./3500 ob/min"
            },
            {
              "key": "DUZINA MASINE",
              "value": "850 mm"
            },
            {
              "key": "SIRINA MASINE",
              "value": "670 mm"
            },
            {
              "key": "VISINA MASINE",
              "value": "1250 mm"
            },
            {
              "key": "TEZINA MASINE",
              "value": "260 kg."
            }
          ]
        },
        {
          "title": "Dvoglava mašina za sečenje ALU i PVC profila",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/DCC-01-300.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Automatska mašina za sečenje za PVC lajsne",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/ABS-01-300.jpg",
          "decription": [
            {
              "detail": "Upotrbljava se za rezanje PVC lajsni"
            },
            {
              "detail": "Za duge lajsne ima metrovni pokazatel"
            },
            {
              "detail": "Masina radi sve operacije potpuno avtomatski"
            }
          ],
          "technicalDetails": [
            {
              "key": "MAKSIMALNA SNAGA",
              "value": "1,5 KW"
            },
            {
              "key": "STANDARDNO NAPAJANJE",
              "value": "380 V"
            },
            {
              "key": "FREKFENCIJA",
              "value": "50 Hz"
            },
            {
              "key": "PRITISAK VAZDUHA",
              "value": "6-8 bari"
            },
            {
              "key": "POTROSNJA VAZDUHA",
              "value": "7 lit./min"
            },
            {
              "key": "DUZINA MASINE",
              "value": "1130 mm"
            },
            {
              "key": "SIRINA MASINE",
              "value": "470 mm"
            },
            {
              "key": "VISINA MASINE",
              "value": "1140 mm"
            },
            {
              "key": "TEZINA MASINE",
              "value": "115 kg"
            }
          ]
        },
        {
          "title": "Mašina za automatsko čišćenje uglova na zavarenim PVC profila",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/ACC-01-300.jpg",
          "decription": [
            {
              "detail": "Upotrbljava se za prociscavanje donjih, gornjih i unutrasnih viskova koji su ostali pri lepenju"
            },
            {
              "detail": "Moze se postaviti 2-4-6-8-10 alata"
            },
            {
              "detail": "Bez promena alata moze se avtomatski ociscavati 2-4-6 razlicitih PVC profila"
            }
          ],
          "technicalDetails": [
            {
              "key": "MAKSIMALNA SNAGA",
              "value": "1,5h2 KW"
            },
            {
              "key": "STANDARDNO NAPAJANJE",
              "value": "380V"
            },
            {
              "key": "FREKFENCIJA",
              "value": "50 Hz"
            },
            {
              "key": "PRITISAK VAZDUHA",
              "value": "6-8 bari"
            },
            {
              "key": "POTROSNJA VAZDUHA",
              "value": "7 lit./min"
            },
            {
              "key": "DUZINA MASINE",
              "value": "1100 mm"
            },
            {
              "key": "SIRINA MASINE",
              "value": "800 mm"
            },
            {
              "key": "VISINA MASINE",
              "value": "1600 mm"
            },
            {
              "key": "TEZINA MASINE",
              "value": "225 kg."
            }
          ]
        },
        {
          "title": "Kopir freza za trojno probivanje, odvodne kanale i frezovanje za PVC i ALU profile",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/AMD-01-300.jpg",
          "decription": [
            {
              "detail": "Upotebljava se pomocu sablona za probijanje mesta brave, rucke i avtomatsko otvaranje kanala za istek vode"
            },
            {
              "detail": "Pnevmatski sistem za stezanje"
            },
            {
              "detail": "Pneumatsko stezanje profila"
            }
          ],
          "technicalDetails": [
            {
              "key": "MAKSIMALNA SNAGA",
              "value": "1,35 KW"
            },
            {
              "key": "STANDARDNO NAPAJANJE",
              "value": "380 V"
            },
            {
              "key": "FREKFENCIJA",
              "value": "50 Hz"
            },
            {
              "key": "PRITISAK VAZDUHA",
              "value": "6-8 bari"
            },
            {
              "key": "POTRO[WA VAZDUHA",
              "value": "3 lit./min"
            },
            {
              "key": "DUZINA MASINE",
              "value": "1000 mm"
            },
            {
              "key": "SIRINA MASINE",
              "value": "650 mm"
            },
            {
              "key": "VISINA MASINE",
              "value": "1350 mm"
            },
            {
              "key": "TEZINA MASINE",
              "value": "120 kg."
            }
          ]
        },
        {
          "title": "Mašina jednoglava za varenje PVC profila sa nula sav",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/SCW-001-300.jpg",
          "decription": [
            {
              "detail": "Upotrebljava se za lepenje uglova kod PVC profila, gde na mesto lepljenjanema nikakav sav i uglove nema potrbe od ociscavanja"
            },
            {
              "detail": "Masina se kontrolise sa potpuno avtomatskim programom"
            },
            {
              "detail": "Mogucnost za podesavanje sile pritiska pri lepenju"
            },
            {
              "detail": "Mogucnost za podesavanje vreme topljenja, lepenja i hladzenja u skladu sa profilom"
            },
            {
              "detail": "Podesavanje pritiska vazduha pri lepenju i stezanje PVC profila"
            }
          ],
          "technicalDetails": [
            {
              "key": "MAKSIMALNA SNAGA",
              "value": "2 KW"
            },
            {
              "key": "STANDARDNO NAPAJANJE",
              "value": "220 V"
            },
            {
              "key": "FREKFENCIJA",
              "value": "50 Hz"
            },
            {
              "key": "PRITISAK VAZDUHA",
              "value": "6-8 bari"
            },
            {
              "key": "POTRO[WA VAZDUHA",
              "value": "7 lit./min"
            },
            {
              "key": "DUZINA MASINE",
              "value": "620 mm"
            },
            {
              "key": "SIRINA MASINE",
              "value": "750 mm"
            },
            {
              "key": "VISINA MASINE",
              "value": "1350 mm"
            },
            {
              "key": "TEZINA MASINE",
              "value": "140 kg."
            },
            {
              "key": "SISTEMA UPRAVLENIJE",
              "value": "Mikrokompjutır"
            }
          ]
        },
        {
          "title": "Dvoglava mašina za varenje za PVC profila sa nula sav",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/DCW-01-300.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Kompresor 500 litri – 50/500 – 5/5 P",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/compresor-300.jpg",
          "decription": [
            {
              "detail": "Dvoglavi 500 litri vazdusni kompresor sa 2 cilidra i vazdusna pumpa ABAC, koja je svetski priznata marka sa efektivnostcu i kvalitetom."
            },
            {
              "detail": "Maksimalni radni pritisak je 12 bara. Fabricki je podesen na 9/11 bara."
            },
            {
              "detail": "Radi efektivno i pri mnogo visokim temperaturama, koristi vazdusne pumpe ABAC, koje su napravljene pomocu specijalne klape."
            },
            {
              "detail": "Radi bez vibracije i balans."
            },
            {
              "detail": "Obezbedzeno je dopunsko ladzenje na glavom bloku pomcu specijalno projektovanom kaisu dvigatelu."
            },
            {
              "detail": "Klape su c.NW Italijanska marka."
            },
            {
              "detail": "Radne sisteme kompresora su START– STOP."
            },
            {
              "detail": "Sva delova kompresora su ofarbana."
            }
          ],
          "technicalDetails": []
        },
        {
          "title": "Portable mašina za varenje PVC profila",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/nastolna-300.png",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Presa za aluminijumsku stolariju",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/presa-za-aluminiy.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Portabl mašina za rezanje PVC i ALU profila f 300 mm.",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/kesim-300.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Portabl čeona freza za PVC i ALU profila",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/PortableEndMilling-300.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Portabl kopirka mašina za PVC i ALU profila",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/PortableCopyRouterMachine-300.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Pneumatska čistilica sa 1 cilindrom",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/SurfaceCleaningMachine.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Ručna čistilica",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/MechanicalCleaningSurface.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Ručna čistilica",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/richna-dleto.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Dodatna oprema za pile",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/lineal.jpg",
          "decription": [],
          "technicalDetails": []
        }
      ]
    },
    {
      "language": "MK",
      "detailsTabName": "Технички детали",
      "descriptionTabName": "Опис",
      "productsMenu": "Proizvodi",
      "contactsMenu": "Контакти",
      "trAddress":"Главен канцеларија: Турциja, Бурса",
      "trEmail":"info.pvc.mashini@gmail.com",
      "bgAddress":"Булгариja, Крџали",
      "bgEmail":"pvc.mashini.bulgaria@gmail.com",
      "machines": [
        {
          "title": "Celna freza T – precka",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/AMM-01-300.jpg",
          "decription": [
            {
              "detail": "Se namenuva za ednovremeno oformuvanje na dva razlicni vida na profili"
            },
            {
              "detail": "Masinata avtomatski go oformuva profilot"
            },
            {
              "detail": "Raboti ednovremeno so dva noza"
            },
            {
              "detail": "Se upotrebuva za ednovremeno oformuvanje na dva razlicni vida na profili"
            }
          ],
          "technicalDetails": [
            {
              "key": "MAKSIMALNA MOKNOST",
              "value": "1.1 KW"
            },
            {
              "key": "STANDARDNO NAPOJUVANJE",
              "value": "380 V"
            },
            {
              "key": "FREKFENCIJA",
              "value": "50 Hz"
            },
            {
              "key": "VOZDUSEN PRITISOK",
              "value": "6-8 bara"
            },
            {
              "key": "POTROSUVACKA NA VOZDUH",
              "value": "3 lit./min"
            },
            {
              "key": "DOLZINA NA MASINATA",
              "value": "610 mm"
            },
            {
              "key": "SIRINA NA MASINATA",
              "value": "670 mm"
            },
            {
              "key": "VISINA NA MASINATA",
              "value": "1090 mm"
            },
            {
              "key": "TEZINA NA MASINATA",
              "value": "105 kg"
            }
          ]
        },
        {
          "title": "Masina za dolno secenje na profile PVC i AL profili",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/MOS-01-300.jpg",
          "decription": [
            {
              "detail": "Se namenuva za secenje na PVC i AL profili"
            },
            {
              "detail": "Secenjeto na PVC i AL profili se izvrsuva od dvete strani, moze da se regulira stepen od – 45 do + 45 po zelba"
            },
            {
              "detail": "Moznost za reguliranje na podiganjeto na pilata na cirkularot"
            },
            {
              "detail": "Masinata e so pnevmaticno steganje na profilot i od dvete strani ima metroven pokazatel"
            },
            {
              "detail": "Specijalen granicnik za sakanata merka"
            },
            {
              "detail": "Po otvaranje na gorniot kapak masinata sopira avtomatski"
            },
            {
              "detail": "Vozdusen pistol za cistenje na masinata"
            }
          ],
          "technicalDetails": [
            {
              "key": "MAKSIMALNA MOKNOST",
              "value": "1.5 KW"
            },
            {
              "key": "STANDARDNONAPOJUVANJE",
              "value": "380 V"
            },
            {
              "key": "FREKFENCIJA",
              "value": "50 Hz"
            },
            {
              "key": "VOZDUSEN PRITISOK",
              "value": "6-8 bara"
            },
            {
              "key": "POTROSUVACKA NA VOZDUH",
              "value": "10.3 lit./min"
            },
            {
              "key": "DOLZINA NA MASINATA",
              "value": "850 mm"
            },
            {
              "key": "SIRINA NA MASINATA",
              "value": "670 mm"
            },
            {
              "key": "VISINA NA MASINATA",
              "value": "1250 mm"
            },
            {
              "key": "TEZINA NA MASINATA",
              "value": "210 kg."
            }
          ]
        },
        {
          "title": "Masina za dolno secenje na profile PVC i AL profili",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/AOS-01-300.jpg",
          "decription": [
            {
              "detail": "Se namenuvaza secenje na PVC i AL profili"
            },
            {
              "detail": "Secenjeto na PVC i AL profili se izvrsuva od dvete strani, moze da se regulira stepen od – 45 do + 45 po zelba"
            },
            {
              "detail": "Moznost za reguliranje na podiganjeto na pilata na cirkularot"
            },
            {
              "detail": "Masinata e so pnevmaticno steganje na profilot i od dvete strani ima metroven pokazatel"
            },
            {
              "detail": "Specijalen granicnik za sakanata merka"
            },
            {
              "detail": "Po otvaranje na gorniot kapak masinata sopira avtomatski"
            },
            {
              "detail": "Vozdusen pistol za cistenje na masinata"
            }
          ],
          "technicalDetails": [
            {
              "key": "MAKSIMALNAMOKNOST",
              "value": "1.5 KW"
            },
            {
              "key": "STANDARDNO NAPOJUVANJE",
              "value": "380 V"
            },
            {
              "key": "FREKFENCIJA",
              "value": "50 Hz"
            },
            {
              "key": "VOZDUSEN PRITISOK",
              "value": "6-8 bara"
            },
            {
              "key": "POTROSUVACKA NA VOZDUH",
              "value": "10.3lit./min"
            },
            {
              "key": "DOLZINA NA MASINATA",
              "value": "850 mm"
            },
            {
              "key": "SIRINA NA MASINATA",
              "value": "670 mm"
            },
            {
              "key": "VISINA NA MASINATA",
              "value": "1250 mm"
            },
            {
              "key": "TEZINA NA MASINATA",
              "value": "210 kg"
            }
          ]
        },
        {
          "title": "Masina za avtomatsko dolno secenje za PVC i AL profili",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/COS-01-300.jpg",
          "decription": [
            {
              "detail": "Se namenuva za secenje na PVC i AL profili"
            },
            {
              "detail": "Secenjeto na PVC i AL profili se izvrsuva od dvete strani, moze da se regulira stepen od – 45 do + 45 po zelba"
            },
            {
              "detail": "Moznost za reguliranje na podiganjeto na pilata na cirkularot"
            },
            {
              "detail": "Masinata e so pnevmaticno steganje na profilot i od dvete strani ima metroven pokazatel"
            },
            {
              "detail": "Specijalen granicnik za sakanata merka"
            },
            {
              "detail": "Po otvaranje na gorniot kapak masinata sopira avtomatski"
            },
            {
              "detail": "Vozdusen pistol za cistenje na masinata"
            }
          ],
          "technicalDetails": [
            {
              "key": "MAKSIMALNA MOKNOST",
              "value": "1.5 KW"
            },
            {
              "key": "STANDARDNO NAPOJUVANJE",
              "value": "380 V"
            },
            {
              "key": "FREKFENCIJA",
              "value": "50 Hz"
            },
            {
              "key": "VOZDUSEN PRITISOK",
              "value": "6-8 bara"
            },
            {
              "key": "POTROSUVACKA NA VOZDUH",
              "value": "10.3 lit./min"
            },
            {
              "key": "RAZMER DISKA",
              "value": "420 mm./3000 ob./ min."
            },
            {
              "key": "DOLZINA NA MASINATA",
              "value": "950 mm"
            },
            {
              "key": "SIRINA NA MASINATA",
              "value": "740 mm"
            },
            {
              "key": "VISINA NA MASINATA",
              "value": "1300 mm"
            },
            {
              "key": "TEZINA NA MASINATA",
              "value": "260 kg."
            }
          ]
        },
        {
          "title": "Dvoglava masina za secenje na PVC i AL profili",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/DCC-01-300.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Masina za avtomatsko secenje na PVC lajsni",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/ABS-01-300.jpg",
          "decription": [
            {
              "detail": "Se namenuva za secenje na PVC lajsni"
            },
            {
              "detail": "Za dolgite lajsni ima metoven pokazuvac"
            },
            {
              "detail": "Masinata gi izvrsuva site operacii potpolno avtomatski"
            }
          ],
          "technicalDetails": [
            {
              "key": "MAKSIMALNA MOKNOST",
              "value": "1.5 KW"
            },
            {
              "key": "STANDARDNO NAPOJUVANJE",
              "value": "380 V"
            },
            {
              "key": "FREKFENCIJA",
              "value": "50 Hz"
            },
            {
              "key": "VOZDUSEN PRITISOK",
              "value": "6-8 bara"
            },
            {
              "key": "POTROSUVACKA NA VOZDUH",
              "value": "8 lit./min"
            },
            {
              "key": "RAZMER NA DISKA",
              "value": "2х200 mm – 2х125 mm"
            },
            {
              "key": "DOLZINA NA MASINATA",
              "value": "1140 mm"
            },
            {
              "key": "SIRINA NA MASINATA",
              "value": "470 mm"
            },
            {
              "key": "VISINA NA MASINATA",
              "value": "1130 mm"
            },
            {
              "key": "TEZINA NA MASINATA",
              "value": "115"
            }
          ]
        },
        {
          "title": "Masina za avtomatsko cistenje na aglite na PVC profili",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/ACC-01-300.jpg",
          "decription": [
            {
              "detail": "Se namenuva za procistuvanje na dolnite, gornite i vnatresnite ostatoci ostanati od lepenjeto"
            },
            {
              "detail": "Mozat da se stavat 2-4-6 nozevi"
            },
            {
              "detail": "Bez da se smenat nozevite moze avtomatski da se cistat 2-4-6 razlicni PVC profili"
            }
          ],
          "technicalDetails": [
            {
              "key": "MAKSIMALNA MOKNOST",
              "value": "1.5h2 KW"
            },
            {
              "key": "STANDARDNO NAPOJUVANJE",
              "value": "380 V"
            },
            {
              "key": "FREKFENCIJA",
              "value": "50 Hz"
            },
            {
              "key": "VOZDUSEN PRITISOK",
              "value": "6-8 bara"
            },
            {
              "key": "POTROSUVACKA NA VOZDUH",
              "value": "7 lit./min"
            },
            {
              "key": "DOLZINA NA MASINATA",
              "value": "1100 mm"
            },
            {
              "key": "SIRINA NA MASINATA",
              "value": "800 mm"
            },
            {
              "key": "VISINA NA MASINATA",
              "value": "1600 mm"
            },
            {
              "key": "TEZINA NA MASINATA",
              "value": "225 kg."
            }
          ]
        },
        {
          "title": "Kopir freza za trojno probivanje, kanali i frezovanje",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/AMD-01-300.jpg",
          "decription": [
            {
              "detail": "Se koristi so pomos na sablon za probivanje na mestata za bravite, rackite i avtomatsko otvaranje na kanalite za istekuvanje na voda"
            },
            {
              "detail": "Pnevmatski sistem za steganje"
            }
          ],
          "technicalDetails": [
            {
              "key": "MAKSIMALNA MOKNOST",
              "value": "1.35 KW"
            },
            {
              "key": "STANDARDNO NAPOJUVANJE",
              "value": "380 V"
            },
            {
              "key": "FREKFENCIJA",
              "value": "50 Hz"
            },
            {
              "key": "VOZDUSEN PRITISOK",
              "value": "6-8 bara"
            },
            {
              "key": "POTROSUVACKA NA VOZDUH",
              "value": "3 lit./min"
            },
            {
              "key": "DOLZINA NA MASINATA",
              "value": "1000 mm"
            },
            {
              "key": "SIRINA NA MASINATA",
              "value": "650 mm"
            },
            {
              "key": "VISINA NA MASINATA",
              "value": "1350 mm"
            },
            {
              "key": "TEZINA NA MASINATA",
              "value": "120 kg."
            }
          ]
        },
        {
          "title": "Masina ednoglava za lepenje na PVC profili so nula sav",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/SCW-001-300.jpg",
          "decription": [
            {
              "detail": "Se koristi za lepenje na aglite na PVC profilite, kade na mestoto na zalepuvanje nema nikakov sav i aglite nemaat potreba od procistuvanje"
            },
            {
              "detail": "Masinata se kontrolira so napolno avtomatska programa"
            },
            {
              "detail": "Moznost za reguliranje na silata na pritisok pri lepenje."
            },
            {
              "detail": "Moznost za reguliranje na vremeto na topenje, lepenje i ladenje spored profilot"
            },
            {
              "detail": "Reguliranje na pritisokot na vozduhot pri lepenjeto i pritiskanjeto na PVC profilot"
            }
          ],
          "technicalDetails": [
            {
              "key": "MAKSIMALNA MOKNOST",
              "value": "1.5 KW"
            },
            {
              "key": "STANDARDNO NAPOJUVANJE",
              "value": "230 V"
            },
            {
              "key": "FREKFENCIJA",
              "value": "50 Hz"
            },
            {
              "key": "VOZDUSEN PRITISOK",
              "value": "6-8 bara"
            },
            {
              "key": "POTROSUVACKA NA VOZDUH",
              "value": "7 lit./min"
            },
            {
              "key": "IGIL LEPENIJE",
              "value": "30° – 180°"
            },
            {
              "key": "DOLZINA NA MASINATA",
              "value": "750 mm"
            },
            {
              "key": "SIRINA NA MASINATA",
              "value": "620 mm"
            },
            {
              "key": "VISINA NA MASINATA",
              "value": "1350 mm"
            },
            {
              "key": "TEZINA NA MASINATA",
              "value": "140 kg"
            },
            {
              "key": "SISTEMA UPRAVLENIJE",
              "value": "Mikrokompjutır"
            }
          ]
        },
        {
          "title": "Dvoglava masina za lepenje na PVC profili so nula sav",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/DCW-01-300.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Kompresor 500 litri",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/compresor-300.jpg",
          "decription": [
            {
              "detail": "Dvoglav 500 litri vozdusen kompresor so 2 cilidra I vozdusna pumpa ABAC, koja e svetskamarka so efektivnost i kvalitet."
            },
            {
              "detail": "Maksimalen raboten pritisok e 12 bara. Fabricki e podesen na 9/11 bara."
            },
            {
              "detail": "Rabtiefektivno i pri mnogu visoka temperatura, koi koristat vozdusni pumpi ABAC, koi se napraveni so pomos na specijalni klapi."
            },
            {
              "detail": "Raboti bez vibracii i balans."
            },
            {
              "detail": "Obezbedeno e dopolnitelno ladenje na glavniot blok so pomos na specijalno proektiran remen dvigatel"
            },
            {
              "detail": "Klapite se c.NW Italijanska marka."
            },
            {
              "detail": "Rabotnite sistemi na kompresorot se START – STOP."
            },
            {
              "detail": "Site delovi na kompresorot se ofarbani."
            }
          ],
          "technicalDetails": []
        },
        {
          "title": "Portabl masina za za lepenje na PVC profili",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/nastolna-300.png",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Presa za alumınıj",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/presa-za-aluminiy.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Portabl mashina za secenje na PVC i AL profili f 300 mm.",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/kesim-300.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Portabl celna freza za profil T-precka",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/PortableEndMilling-300.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Portabl kopir freza",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/PortableCopyRouterMachine-300.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Aparat za cistenje na aglite na PVC profili s vozduh",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/SurfaceCleaningMachine.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Aparat za cistenje na aglite na PVC profili",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/MechanicalCleaningSurface.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Dleto za cistenje",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/richna-dleto.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "Lineal za izmervane",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/lineal.jpg",
          "decription": [],
          "technicalDetails": []
        }
      ]
    },
    {
      "language": "AR",
      "detailsTabName": "تفاصيل تقنية",
      "descriptionTabName": "وصف",
      "productsMenu": "منتجات",
      "contactsMenu": "جهات الاتصال",
      "trAddress":"Head office: Turkey, Bursa",
      "trEmail":"info.pvc.mashini@gmail.com",
      "bgAddress":"Bulgaria, Kardzhali",
      "bgEmail":"pvc.mashini.bulgaria@gmail.com",
      "machines": [
        {
          "title": "ماكينة التفريز الطرفي الأتوماتيكية لإطار PVC",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/AMM-01-300.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "ماكينة قطع إطارات PVC الأتوماتيكية ذات الرأس الواحدة",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/MOS-01-300.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "ماكينة قطع إطارات PVC اليدوية ذات الرأس الواحدة",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/AOS-01-300.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "ماكينة قطع إطارات PVC الأتوماتيكية ذات الرأس الواحدة",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/COS-01-300.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "ماكينة لحام إطارات PVC الأتوماتيكية ذات الرأس المزدوجة",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/DCC-01-300.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "ماكينة قطع حبات التزجيج الأتوماتيكية لإطار PVC",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/ABS-01-300.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "الماكينة الأتوماتيكية لتنظيف زاويا إطارات نوافذ PVC",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/ACC-01-300.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "ماكينات نسخ بقوة ثلاثية للنسخ وثقب فتحة الماء لإطارات PVC",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/AMD-01-300.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "ماكينة لحام إطارات PVC الأتوماتيكية ذات",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/SCW-001-300.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "ماكينة لحام إطارات PVC الأتوماتيكية ذات الرأس المزدوجة",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/DCW-01-300.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "ضاغط 500 لتر",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/compresor-300.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "آلةيدوية لمحات الترابط PVC",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/nastolna-300.png",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "صحافة",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/presa-za-aluminiy.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "آلة قطع اليدوية",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/kesim-300.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "آلة طحن",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/PortableEndMilling-300.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "آلة طحن نسخة",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/PortableCopyRouterMachine-300.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "التلقائي واحد آلة تنظيف السطح",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/SurfaceCleaningMachine.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "جهاز تنظيف السطح الميكانيكي",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/MechanicalCleaningSurface.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "أداة التنظيف",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/richna-dleto.jpg",
          "decription": [],
          "technicalDetails": []
        },
        {
          "title": "القياس جدول الشخصي قطع",
          "imageUrl": "http://www.pvc-mashini.com/wp-content/uploads/ngg_featured/lineal.jpg",
          "decription": [],
          "technicalDetails": []
        }
      ]
    }
  ]
}`);