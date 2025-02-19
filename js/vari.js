//VARI.JS
const planetData = {
    "planets": [
      {
        "name": "Mercury",
        "orbital_parameters": {
          "a": {
            "value": 0.38709843,
            "unit": "au",
            "rate": 0.00000000,
            "rate_unit": "au/Cy"
          },
          "e": {
            "value": 0.20563661,
            "unit": "rad",
            "rate": 0.00002123,
            "rate_unit": "rad/Cy"
          },
          "I": {
            "value": 7.00559432,
            "unit": "deg",
            "rate": -0.00590158,
            "rate_unit": "deg/Cy"
          },
          "L": {
            "value": 252.25166724,
            "unit": "deg",
            "rate": 149472.67486623,
            "rate_unit": "deg/Cy"
          },
          "long_peri": {
            "value": 77.45771895,
            "unit": "deg",
            "rate": 0.15940013,
            "rate_unit": "deg/Cy"
          },
          "long_node": {
            "value": 48.33961819,
            "unit": "deg",
            "rate": -0.12214182,
            "rate_unit": "deg/Cy"
          },
          "b": {
            "value": 1
          },
          "c": {
            "value": 1
          },
          "s": {
            "value": 1
          },
          "f": {
            "value": 1
          }
        }
      },
      {
        "name": "Venus",
        "orbital_parameters": {
          "a": {
            "value": 0.72332102,
            "unit": "au",
            "rate": -0.00000026,
            "rate_unit": "au/Cy"
          },
          "e": {
            "value": 0.00676399,
            "unit": "rad",
            "rate": -0.00005107,
            "rate_unit": "rad/Cy"
          },
          "I": {
            "value": 3.39777545,
            "unit": "deg",
            "rate": 0.00043494,
            "rate_unit": "deg/Cy"
          },
          "L": {
            "value": 181.97970850,
            "unit": "deg",
            "rate": 58517.81560260,
            "rate_unit": "deg/Cy"
          },
          "long_peri": {
            "value": 131.76755713,
            "unit": "deg",
            "rate": 0.05679648,
            "rate_unit": "deg/Cy"
          },
          "long_node": {
            "value": 76.67261496,
            "unit": "deg",
            "rate": -0.27274174,
            "rate_unit": "deg/Cy"
          },
          "b": {
            "value": 1
          },
          "c": {
            "value": 1
          },
          "s": {
            "value": 1
          },
          "f": {
            "value": 1
          }
        }
      },
      {
        "name": "EM Bary",
        "orbital_parameters": {
          "a": {
            "value": 1.00000018,
            "unit": "au",
            "rate": -0.00000003,
            "rate_unit": "au/Cy"
          },
          "e": {
            "value": 0.01673163,
            "unit": "rad",
            "rate": -0.00003661,
            "rate_unit": "rad/Cy"
          },
          "I": {
            "value": -0.00054346,
            "unit": "deg",
            "rate": -0.01337178,
            "rate_unit": "deg/Cy"
          },
          "L": {
            "value": 100.46691572,
            "unit": "deg",
            "rate": 35999.37306329,
            "rate_unit": "deg/Cy"
          },
          "long_peri": {
            "value": 102.93005885,
            "unit": "deg",
            "rate": 0.31795260,
            "rate_unit": "deg/Cy"
          },
          "long_node": {
            "value": -5.11260389,
            "unit": "deg",
            "rate": -0.24123856,
            "rate_unit": "deg/Cy"
          },
          "b": {
            "value": 1
          },
          "c": {
            "value": 1
          },
          "s": {
            "value": 1
          },
          "f": {
            "value": 1
          }
        }
      },
      {
        "name": "Mars",
        "orbital_parameters": {
          "a": {
            "value": 1.52371243,
            "unit": "au",
            "rate": 0.00000097,
            "rate_unit": "au/Cy"
          },
          "e": {
            "value": 0.09336511,
            "unit": "rad",
            "rate": 0.00009149,
            "rate_unit": "rad/Cy"
          },
          "I": {
            "value": 1.85181869,
            "unit": "deg",
            "rate": -0.00724757,
            "rate_unit": "deg/Cy"
          },
          "L": {
            "value": -4.56813164,
            "unit": "deg",
            "rate": 19140.29934243,
            "rate_unit": "deg/Cy"
          },
          "long_peri": {
            "value": -23.91744784,
            "unit": "deg",
            "rate": 0.45223625,
            "rate_unit": "deg/Cy"
          },
          "long_node": {
            "value": 49.71320984,
            "unit": "deg",
            "rate": -0.26852431,
            "rate_unit": "deg/Cy"
          },
          "b": {
            "value": 1
          },
          "c": {
            "value": 1
          },
          "s": {
            "value": 1
          },
          "f": {
            "value": 1
          }
        }
      },
      {
        "name": "Jupiter",
        "orbital_parameters": {
          "a": {
            "value": 5.20248019,
            "unit": "au",
            "rate": -0.00002864,
            "rate_unit": "au/Cy"
          },
          "e": {
            "value": 0.04853590,
            "unit": "rad",
            "rate": 0.00018026,
            "rate_unit": "rad/Cy"
          },
          "I": {
            "value": 1.29861416,
            "unit": "deg",
            "rate": -0.00322699,
            "rate_unit": "deg/Cy"
          },
          "L": {
            "value": 34.33479152,
            "unit": "deg",
            "rate": 3034.90371757,
            "rate_unit": "deg/Cy"
          },
          "long_peri": {
            "value": 14.27495244,
            "unit": "deg",
            "rate": 0.18199196,
            "rate_unit": "deg/Cy"
          },
          "long_node": {
            "value": 100.29282654,
            "unit": "deg",
            "rate": 0.13024619,
            "rate_unit": "deg/Cy"
          },
          "b": {
            "value": -0.00012452
          },
          "c": {
            "value": 0.06064060
          },
          "s": {
            "value": -0.35635438
          },
          "f": {
            "value": 38.35125000
          }
        }
      },
      {
        "name": "Saturn",
        "orbital_parameters": {
          "a": {
            "value": 9.54149883,
            "unit": "au",
            "rate": -0.00003065,
            "rate_unit": "au/Cy"
          },
          "e": {
            "value": 0.05550825,
            "unit": "rad",
            "rate": -0.00032044,
            "rate_unit": "rad/Cy"
          },
          "I": {
            "value": 2.49424102,
            "unit": "deg",
            "rate": 0.00451969,
            "rate_unit": "deg/Cy"
          },
          "L": {
            "value": 50.07571329,
            "unit": "deg",
            "rate": 1222.11494724,
            "rate_unit": "deg/Cy"
          },
          "long_peri": {
            "value": 92.86136063,
            "unit": "deg",
            "rate": 0.54179478,
            "rate_unit": "deg/Cy"
          },
          "long_node": {
            "value": 113.63998702,
            "unit": "deg",
            "rate": -0.25015002,
            "rate_unit": "deg/Cy"
          },
          "b": {
            "value": 0.00025899
          },
          "c": {
            "value": -0.13434469
          },
          "s": {
            "value": 0.87320147
          },
          "f": {
            "value": 38.35125000
          }
        }
      },
      {
        "name": "Uranus",
        "orbital_parameters": {
          "a": {
            "value": 19.18797948,
            "unit": "au",
            "rate": 0.00019771,
            "rate_unit": "au/Cy"
          },
          "e": {
            "value": 0.04638122,
            "unit": "rad",
            "rate": -0.00003661,
            "rate_unit": "rad/Cy"
          },
          "I": {
            "value": 0.77319601,
            "unit": "deg",
            "rate": 0.00118648,
            "rate_unit": "deg/Cy"
          },
          "L": {
            "value": 314.20216657,
            "unit": "deg",
            "rate": 429.86402833,
            "rate_unit": "deg/Cy"
          },
          "long_peri": {
            "value": 173.00538919,
            "unit": "deg",
            "rate": 0.33679344,
            "rate_unit": "deg/Cy"
          },
          "long_node": {
            "value": 74.01692510,
            "unit": "deg",
            "rate": -0.57342034,
            "rate_unit": "deg/Cy"
          },
          "b": {
            "value": -0.00008887
          },
          "c": {
            "value": 0.19370458
          },
          "s": {
            "value": -0.51348230
          },
          "f": {
            "value": 38.35125000
          }
        }
      },
      {
        "name": "Neptune",
        "orbital_parameters": {
          "a": {
            "value": 30.06992276,
            "unit": "au",
            "rate": 0.00018171,
            "rate_unit": "au/Cy"
          },
          "e": {
            "value": 0.00945633,
            "unit": "rad",
            "rate": -0.00000028,
            "rate_unit": "rad/Cy"
          },
          "I": {
            "value": 1.76995536,
            "unit": "deg",
            "rate": -0.00049470,
            "rate_unit": "deg/Cy"
          },
          "L": {
            "value": 304.88003157,
            "unit": "deg",
            "rate": 218.20363256,
            "rate_unit": "deg/Cy"
          },
          "long_peri": {
            "value": 254.94841060,
            "unit": "deg",
            "rate": -0.00437072,
            "rate_unit": "deg/Cy"
          },
          "long_node": {
            "value": 131.72169130,
            "unit": "deg",
            "rate": -0.09743163,
            "rate_unit": "deg/Cy"
          },
          "b": {
            "value": 0.00025219
          },
          "c": {
            "value": -0.02079745
          },
          "s": {
            "value": -0.38664383
          },
          "f": {
            "value": 38.35125000
          }
        }
      }
    ]
  };
  