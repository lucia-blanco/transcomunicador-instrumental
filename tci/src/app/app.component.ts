import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public http: Http) {
    this.checkWord(this.palabra);
  }

  letrasArr: Array<string> = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
  'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y', 'z'];
  sizeArr: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21, 22, 23];
  probPrim: Array<number> = [15.67280066, 2.694052, 10.26902529, 13.09905418,
    15.17828169, 2.327120187, 2.000395742, 1.674304484, 2.769242946,
    0.93157624, 0.024061103, 1.889113143, 4.331631644, 0.762357038,
    0.037199731, 1.126439511, 6.155526534, 0.305829277, 7.344018362,
    4.231904705, 4.389726542, 0.380070442, 1.547350509, 0.003640825,
    0.022953025, 0.115398314, 0.716925878];
  probA: Array<number> = [0.014401613, 7.388240816, 3.940921383, 3.429717462,
    0.142949344, 0.875404712, 1.440694691, 0.372628401, 4.881506729,
    1.040863243, 0.001920215, 5.887166029, 7.533857125, 11.53547864,
    0.598573707, 0.038297623, 2.548018711, 0.426821137, 28.46025422,
    15.95602708, 0.787074819, 0.609988319, 0.931944378, 0.000640072,
    0.036057372, 0.320249201, 0.800302967];
  probB: Array<number> = [49.74695143, 0.002114612, 0.089518573, 0.217805033,
    7.151617678, 0.003524353, 0.002114612, 0, 8.048918024, 0.130401071,
    0, 4.729682103, 0.04299711, 0.080355255, 0, 10.1585959,
    0.002114612, 0, 13.15782054, 1.20250934, 0.200183266, 4.788891238,
    0.152956932, 0, 0, 0.090928315, 0];
  probC: Array<number> = [27.75056596, 0.000748377, 0.635372037, 0.004116073,
    10.62882374, 0, 0, 13.99053303, 13.59314487, 0.000374188,
    0.002245131, 1.922206215, 0.003367696, 0.048270314, 0, 19.74891953,
    0.000374188, 0.001122565, 3.095661285, 0.002619319, 1.984695691,
    6.586091414, 0, 0, 0, 0, 0.000748377];
  probD: Array<number> = [12.38396135, 0, 0.000527448, 0.001054897,
    47.55527659, 0, 0.011076417, 0.059601671, 13.52588717, 0.092830921,
    0.000527448, 0.002109794, 0.178805013, 0.004747036, 0, 18.94647453,
    0, 0.031646905, 3.746993544, 0.090721127, 0.000527448, 3.178404152,
    0.154014937, 0.001054897, 0, 0.032701802, 0.001054897];
  probE: Array<number> = [10.58952219, 1.00978658, 4.698664091, 1.466386995,
    1.642685084, 0.577187144, 1.585955501, 0.205390183, 7.992470966,
    1.029278283, 0.001018223, 3.113726814, 10.18339656, 17.61191729,
    0.420089836, 0.899091163, 1.270160821, 0.269974632, 9.906730747,
    19.30594992, 3.277951684, 0.173825261, 0.93851095, 0.000290921,
    1.04382433, 0.081457863, 0.704755976];
  probF: Array<number> = [16.125047, 0, 0, 0, 11.03829833, 0.012533348,
    0.001790478, 0.001790478, 31.32262627, 0, 0.001790478, 9.049077008,
    0, 0.003580956, 0, 13.13136739, 0, 0, 11.9371184, 0.001790478,
    0.050133391, 7.323055988, 0, 0, 0, 0, 0];
  probG: Array<number> = [37.34212808, 0.001171591, 0.001171591, 0.015230686,
    4.689879795, 0.001171591, 0.002343183, 0.004686365, 8.046488741,
    0, 0.001171591, 2.374815474, 0.502612648, 1.825339176, 0,
    10.52088947, 0.001171591, 0, 14.32621787, 0.002343183, 0.003514774,
    20.27321508, 0, 0, 0, 0, 0.064437519];
  probH: Array<number> = [38.10560606, 0.003324081, 0.001662041, 0,
    16.65697143, 0, 0, 0, 19.37606994, 0, 0.003324081, 0.003324081,
    0.011634285, 0.001662041, 0, 14.07249821, 0.001662041, 0,
    0.006648163, 0, 0.011634285, 11.74231722, 0, 0, 0, 0.001662041,
    0];
  probI: Array<number> = [17.22368004, 1.210489675, 6.253269785, 2.139005491,
    5.569859075, 2.118614394, 2.124999485, 0.045931461, 0.002471648,
    0.672082322, 0.003707472, 6.048534931, 2.900273117, 9.535206568,
    0.410499561, 3.543107603, 1.155495504, 0.733873526, 3.36885641,
    23.66108761, 3.659481036, 0.086301714, 1.219758355, 0.000411941,
    0.064468822, 0.003707472, 6.244824987];
  probJ: Array<number> = [46.26506024, 0, 0.005238345, 0, 26.39863803, 0,
    0, 0, 6.008381351, 0, 0, 0.002619172, 0, 0, 0, 9.882137245,
    0, 0, 0, 0, 0, 11.43530644, 0, 0, 0, 0, 0.002619172];
  probK: Array<number> = [20.77922078, 0, 0.865800866, 0, 13.41991342, 0,
    0, 0, 49.78354978, 0, 0, 0.865800866, 0, 0.432900433, 0,
    4.329004329, 0, 0, 3.463203463, 0, 0, 5.194805195, 0,
    0.432900433, 0, 0.432900433, 0];
  probL: Array<number> = [34.52079513, 0.793096423, 1.697274853, 1.729774829,
    16.62058461, 0.65630548, 1.291752767, 0.157649136, 16.16073421,
    0.071790991, 0.001940297, 14.22431774, 1.729774829, 0.034440273,
    0, 0.978879867, 0.783394938, 0.285223668, 0.028619382, 0.901753058,
    1.868506068, 3.721974834, 1.338804971, 0, 0, 0.000970149,
    0.401641491];
  probM: Array<number> = [18.80937791, 9.106743931, 0.000965004, 0,
    0.010132543, 0, 0, 0, 8.854877855, 0.000482502, 0, 0.001930008,
    0.003860017, 0.199273352, 0, 49.17854024, 10.24882631, 0.000482502,
    0, 0.001447506, 0.001930008, 3.580647807, 0.000482502, 0, 0,
    0, 0];
  probN: Array<number> = [17.25471565, 0.000351914, 12.79771959, 11.48507883,
    9.329603041, 2.649915541, 5.881545608, 0.579603041, 5.33079955,
    1.095157658, 0.002463401, 0.829814189, 1.138091216, 0.230503941,
    0, 3.548353041, 0.000351914, 0.940315315, 1.435458896, 4.59424268,
    16.88203829, 1.112401464, 1.625844595, 0, 0, 0.118947072,
    1.136683559];
  probÑ: Array<number> = [53.99918245, 0, 0, 0, 19.71658264, 0, 0, 0,
    9.96048508, 0, 0, 0, 0, 0, 0, 13.35331789, 0, 0, 0, 0,
    0, 2.970431939, 0, 0, 0, 0, 0];
  probO: Array<number> = [0.467616454, 3.043489805, 4.262242848, 1.495487575,
    0.232185583, 0.979191805, 1.976675232, 0.383238974, 0.188226686,
    1.230554089, 0.00383534, 8.384643299, 4.624829991, 19.49149292,
    0.397695256, 0.079952088, 2.184078619, 0.74258083, 13.72461669,
    29.21230967, 4.582936277, 0.005900523, 0.910155685, 0.000590052,
    0.22628506, 0.418347086, 0.750841562];
  probP: Array<number> = [24.939984, 0, 0.166139542, 0.000762108, 21.86335404,
    0, 0, 0.000762108, 12.45970354, 0, 0, 6.56937088, 0.000762108,
    0.048774911, 0, 12.07712533, 0.002286324, 0, 12.3034714,
    0.326944328, 1.286438288, 7.952596883, 0, 0, 0, 0.001524216, 0];
  probQ: Array<number> = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0];
  probR: Array<number> = [28.40251679, 0.930596826, 1.715012696, 1.622697207,
    28.33004648, 0.209791821, 0.987120129, 0.004075348, 16.8148853,
    0.094796135, 0.001594701, 0.317877134, 1.1249732, 1.327145892, 0,
    7.806949, 0.501444977, 0.280313058, 5.76502253, 0.674913044,
    1.967507074, 0.45112329, 0.491345201, 0.000708756, 0.000354378,
    0.001063134, 0.176125903];
  probS: Array<number> = [11.4519912, 1.06041407, 9.583560835, 0.265103517,
    27.23148825, 1.321740205, 1.238294409, 0.617086815, 5.335036589,
    0.055630531, 0.003090585, 0.840295735, 2.50509088, 0.392160903,
    0.000343398, 6.418801746, 5.849103902, 1.319679815, 0.30802831,
    0.005837772, 19.76360458, 3.575120104, 0.729034673, 0.000343398,
    0, 0.057004124, 0.072113651];
  probT: Array<number> = [44.73538967, 0.037004052, 0.001881562, 0.001881562,
    4.500068991, 0.001881562, 0.001254375, 0.005644686, 21.83364484,
    0, 0, 0.084670288, 0.052056547, 0.012543746, 0, 13.60996475,
    0.002508749, 0, 7.548826533, 0.004390311, 0.005644686, 7.548826533,
    0.001254375, 0.001254375, 0, 0.000627187, 0.008780622];
  probU: Array<number> = [7.348260278, 3.032972106, 5.921979784, 3.54504811,
    16.51156575, 1.070317815, 1.902517251, 0.049203032, 7.925940325,
    2.273058606, 0.003037224, 10.56103606, 5.00230829, 6.634512586,
    1.552021576, 0.23204393, 2.095684712, 0.191345126, 11.15511712,
    5.504665176, 4.403367674, 0.003037224, 0.403343376, 0.000607445,
    0.11662941, 1.114053844, 1.446326174];
  probV: Array<number> = [30.05906057, 0, 0, 0.002132151, 29.01643888, 0,
    0, 0, 27.72861986, 0, 0, 0.002132151, 0, 0.002132151, 0,
    11.82490778, 0, 0, 0, 0, 0, 1.364576448, 0, 0, 0, 0, 0];
  probW: Array<number> = [32.60869565, 0, 0, 0, 17.39130435, 0, 0,
    4.347826087, 26.08695652, 0, 0, 0, 0, 4.347826087, 0,
    6.52173913, 0, 0, 2.173913043, 2.173913043, 4.347826087, 0, 0,
    0, 0, 0, 0];
  probX: Array<number> = [7.070365359, 0, 13.63328823, 0, 5.130807397,
    0.631483987, 0, 2.537212449, 20.68110059, 0, 0, 0.0112765,
    0.045105999, 0, 0, 3.51826793, 20.38791159, 0.654036987, 0, 0,
    22.37257555, 3.292737934, 0.0112765, 0.0112765, 0, 0.0112765, 0];
  probY: Array<number> = [41.9064082, 0.012347203, 0.012347203, 0,
    33.01642178, 0, 0, 0, 0.382763304, 0, 0, 0.012347203,
    0.049388813, 0, 0, 10.85319175, 0, 0, 0.024694407, 0.012347203,
    0.012347203, 13.70539573, 0, 0, 0, 0, 0];
  probZ: Array<number> = [76.15527128, 0.005293339, 4.257609175, 0.007057786,
    0.063520071, 0.001764446, 1.183943538, 0.003528893, 0.185266873,
    0, 0, 0.003528893, 0.562858403, 1.877370975, 0, 10.53198059,
    0.121746802, 0.573445082, 0.005293339, 0.001764446, 0.012351125,
    4.423467137, 0, 0, 0, 0, 0.022937803];
  probSize: Array<number> = [2.5, 2.5, 7.25, 20, 20, 12.5, 5, 2.5, 2.5, 2.5, 2.5,
    2.5, 2.5, 2.5, 2.5, 2.5, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25];

  texto = '';
  palabra = '';
  selected = 100;
  correct = '';
  loading_palabras = false;
  palabras: any[] = [];

  generateText() {
    this.texto = '';
    this.correct = '';
    for (let m = 0; m < this.selected; m++) {
      const rl = Math.floor(Math.random() * 100);
      const rs = Math.floor(Math.random() * 100);
      let size = 0;
      let letra = '';
      let sizeSum = 0.0;
      let sizeBool = false;

      for (let n = this.sizeArr.length - 1; n >= 0 && !sizeBool; n--) {
        sizeSum += this.probSize[n];
        if (sizeSum >= rs) {
          size = this.sizeArr[n];
          sizeBool = true;
        }
      }
      // Pasa por las letras sumando la probabilidad hasta que sea mayor o igual que el número random
      this.palabra = '';
      let sumP = 0.0;
      let primLetra = false;
      for (let i = this.letrasArr.length - 1; i >= 0 && !primLetra; i--) {
        sumP += this.probPrim[i];
        if (sumP >= rl) {
          letra = this.letrasArr[i];
          this.palabra += letra;
          primLetra = true;
        }
      }

      if (size > 1) {
        for (let j = size - 2; j >= 0; j--) {
          let prob = [];
          let impreso = false;
          const r = Math.floor(Math.random() * 100);
          let sumL = 0.0;
          switch (letra) {
            case 'a':
              prob = this.probA;
              break;
            case 'b':
              prob = this.probB;
              break;
            case 'c':
              prob = this.probC;
              break;
            case 'd':
              prob = this.probD;
              break;
            case 'e':
              prob = this.probE;
              break;
            case 'f':
              prob = this.probF;
              break;
            case 'g':
              prob = this.probG;
              break;
            case 'h':
              prob = this.probH;
              break;
            case 'i':
              prob = this.probI;
              break;
            case 'j':
              prob = this.probJ;
              break;
            case 'k':
              prob = this.probK;
              break;
            case 'l':
              prob = this.probL;
              break;
            case 'm':
              prob = this.probM;
              break;
            case 'n':
              prob = this.probN;
              break;
            case 'ñ':
              prob = this.probÑ;
              break;
            case 'o':
              prob = this.probO;
              break;
            case 'p':
              prob = this.probP;
              break;
            case 'q':
              prob = this.probQ;
              break;
            case 'r':
              prob = this.probR;
              break;
            case 's':
              prob = this.probS;
              break;
            case 't':
              prob = this.probT;
              break;
            case 'u':
              prob = this.probU;
              break;
            case 'v':
              prob = this.probV;
              break;
            case 'w':
              prob = this.probW;
              break;
            case 'x':
              prob = this.probX;
              break;
            case 'y':
              prob = this.probY;
              break;
            case 'z':
              prob = this.probZ;
              break;
          }
          for (let k = this.letrasArr.length - 1; k >= 0 && !impreso; k--) {
            sumL += prob[k];
            if (sumL >= r) {
              this.palabra += (this.letrasArr[k]);
              letra = this.letrasArr[k];
              impreso = true;
            }
          }
        }
        this.checkWord(this.palabra);
      }
      this.texto += this.palabra + ' ';
    }

  }

  checkWord(palabra) {
    this.http.get('assets/palabras.json')
            .subscribe( data => {
            this.loading_palabras = true;
            this.palabras = data.json();
          });
    if ((_.indexOf(this.palabras, palabra) >= 0)) {
      this.correct += this.palabra + ' ';
    }
  }
}


