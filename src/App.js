import react from 'react';
import logo from './logo.svg';
// import './App.css';
import './style.css';


function App() {
  return (
    <div className="App">
      <div class="container" >
        <header className="App-header">
          <div class="row">
            <img src ={logo} class="col-3"></img>
            <div class="title col-6" >
              <h1 >CESMED LAB</h1>
              <h2>Solicitud de exámenes</h2>
            </div>


          </div>
        </header>
        <main>
          <div>
            <form class="form" >
              <label>
                Nombre Paciente: <br></br>
                <input placeholder="Nompre Paciente"></input>
              </label>
              <label>
                Cedula Paciente: <br></br>
                <input placeholder="Cedula Paciente"></input>
              </label>
              <label>
                Telefono Paciente:<br></br>
                <input placeholder="Telefono Paciente"></input>
              </label>
              <label>
                E-mail Paciente: <br></br>
                <input placeholder="E-mail Paciente"></input>
              </label>
              <label>
                Fecha de nacimiento Paciente: <br></br>
                <input type="date" placeholder="Fecha de nacimiento"></input>
              </label>
              <label>
                Médico: <br></br>
                <input placeholder="E-mail Paciente"></input>
              </label>
              <label>
                Lugar: <br></br>
                <input placeholder="Lugar de examen"></input>
              </label>
              <label>
                Fecha de exámen: <br></br>
                <input type="date" placeholder="Fecha de exámen"></input>
              </label>
              
            </form>
          </div>
        </main>
        <form class="formExams" >
          <section class="row">
            <div class="col">
              <h3>HEMATOLOGÍA</h3>
              <div class="row"> 
                  <label>
                    <input type="checkbox"></input>
                    Biometria Hermática completa
                  </label>
                  <label>
                    <input type="checkbox"></input>
                    Hcto/Hb
                  </label>
                  <label>
                    <input type="checkbox"></input>
                    Plaquetas
                  </label>
                  <label>
                    <input type="checkbox"></input>
                    Sedimentación(SVG)
                  </label>
                  <label>
                    <input type="checkbox"></input>
                    Hematozoario
                  </label>
                  <label>
                    <input type="checkbox"></input>
                    Reticulocitos
                  </label>
                  <label>
                    <input type="checkbox"></input>
                    Grupo y factor Flh
                  </label>
              </div>
              <h2>COAGULACIÓN</h2>
              <div class="row" >
                <label>
                  <input type="checkbox"></input>
                  T.P.-INR
                </label>
                <label>
                  <input type="checkbox"></input>
                  T.T.P.
                </label>
              </div>
            </div>
            <div class="col">
              <h3>QUÍMICA SANGUÍNEA</h3>
              <div class="row"> 
                <label>
                  <input type="checkbox"></input>
                  Glucosa Basal
                </label>
                <label>
                  <input type="checkbox"></input>
                  Glucosa Post. prandial
                </label>
                <label>
                  <input type="checkbox"></input>
                  Curva de glucosa --- Horas
                </label>
                <label>
                  <input type="checkbox"></input>
                  Urea
                </label>
                <label>
                  <input type="checkbox"></input>
                  Creatinina
                </label>
                <label>
                  <input type="checkbox"></input>
                  Acido úrico
                </label>
                <label>
                  <input type="checkbox"></input>
                  Colesterol
                </label>
                <label>
                  <input type="checkbox"></input>
                  HDL colesterol
                </label>
                <label>
                  <input type="checkbox"></input>
                  LDL colesterol
                </label>
                <label>
                  <input type="checkbox"></input>
                  Triglicéridos
                </label>
                <label>
                  <input type="checkbox"></input>
                  Blilirubina
                </label>
                <label>
                  <input type="checkbox"></input>
                  Proteinas totales
                </label>
                <label>
                  <input type="checkbox"></input>
                  Albumina
                </label>
                <label>
                  <input type="checkbox"></input>
                  Globulinas
                </label>
                <label>
                  <input type="checkbox"></input>
                  Calcio total
                </label>
              </div>
            </div>
            <div class="col">
              <div class="row">
                <h3>ENZIMAS</h3>
                <div class="row"> 
                <label>
                  <input type="checkbox"></input>
                  TGO
                </label>
                <label>
                  <input type="checkbox"></input>
                  TGP
                </label>
                <label>
                  <input type="checkbox"></input>
                  Fost. Alcalina
                </label>
                <label>
                  <input type="checkbox"></input>
                  Amilasa
                </label>
                <label>
                  <input type="checkbox"></input>
                  Lipasa
                </label>
                <label>
                  <input type="checkbox"></input>
                  LDH
                </label>
              </div>
                <h3>ELECTROLITOS</h3>
                <div class="row">
                  <label>
                    <input type="checkbox"></input>
                    Solido
                  </label>
                  <label>
                    <input type="checkbox"></input>
                    Potasio
                  </label>
                  <label>
                    <input type="checkbox"></input>
                    Cloro
                  </label>
                  <label>
                    <input type="checkbox"></input>
                    Calcio Lonico
                  </label>
                  <label>
                    <input type="checkbox"></input>
                    Utlo
                  </label>
                  <label>
                    <input type="checkbox"></input>
                    Fósforo
                  </label>
                </div>
              </div>
            </div>
          </section>
          <section class="row">
            <div class="col">
              <div class="row">
                <h3>SEROLOGÍA</h3>
                <label>
                  <input type="checkbox"></input>
                  Aglutinaciones Febriles
                </label>
                <label>
                  <input type="checkbox"></input>
                  ASTO
                </label>
                <label>
                  <input type="checkbox"></input>
                  RF LATEX
                </label>
                <label>
                  <input type="checkbox"></input>
                  PCR
                </label>
                <label>
                  <input type="checkbox"></input>
                  V.D.A.L.
                </label>
                <label>
                  <input type="checkbox"></input>
                  R.P.R.
                </label>
                <label>
                  <input type="checkbox"></input>
                  FTA ABS
                </label>
              </div>
              <div class="row">
                <h3>PRUEBAS CARDIACAS</h3>
                <label>
                  <input type="checkbox"></input>
                  CPK
                </label>
                <label>
                  <input type="checkbox"></input>
                  CK MB
                </label>
                <label>
                  <input type="checkbox"></input>
                  TROPONINA
                </label>
                <label>
                  <input type="checkbox"></input>
                  Dimero D
                </label>
                <label>
                  <input type="checkbox"></input>
                  Mioglobina
                </label>
              </div>

            </div>
            <div class="col">
              <div class="row">

                <h3>PRUEBAS HORMONALES</h3>
                <label>
                  <input type="checkbox"></input>
                  T3
                </label>
                <label>
                  <input type="checkbox"></input>
                  T4
                </label>
                <label>
                  <input type="checkbox"></input>
                  ft4
                </label>
                <label>
                  <input type="checkbox"></input>
                  TSH
                </label>
                <label>
                  <input type="checkbox"></input>
                  FSH
                </label>
                <label>
                  <input type="checkbox"></input>
                  Estradiol
                </label>
                <label>
                  <input type="checkbox"></input>
                  Prolactina
                </label>
                <label>
                  <input type="checkbox"></input>
                  Progesterona
                </label>
                <label>
                  <input type="checkbox"></input>
                  Testosterona
                </label>
                <label>
                  <input type="checkbox"></input>
                  Crotisol am/pm
                </label>
                <label>
                  <input type="checkbox"></input>
                  BHCG Cuantitativa
                </label>
                <label>
                  <input type="checkbox"></input>
                  BHCG Cualitativa
                </label>
              </div>

            </div>
            <div class="col">
              <div class="row">
                <h3>INMUNOLOGÍA</h3>
                <div class="col">
                  <div class="row">
                    <label>
                      <input type="checkbox"></input>
                      Toxoplasma
                    </label>
                    <label>
                      <input type="checkbox"></input>
                      Rubiola
                    </label>
                    <label>
                      <input type="checkbox"></input>
                      Citomegalovirus
                    </label>
                    <label>
                      <input type="checkbox"></input>
                      Herpes 1
                    </label>
                    <label>
                      <input type="checkbox"></input>
                      Herpes 2
                    </label>
                    <label>
                      <input type="checkbox"></input>
                      Chlamydla
                    </label>
                    <label>
                      <input type="checkbox"></input>
                      Heticobacter Pylori
                    </label>
                    <label>
                      <input type="checkbox"></input>
                      HAV IgM
                    </label>
                    <label>
                      <input type="checkbox"></input>
                      HbsAg.
                    </label>
                    <label>
                      <input type="checkbox"></input>
                      HCV
                    </label>
                    <label>
                      <input type="checkbox"></input>
                      HIV 1-2
                    </label>
                    <label>
                      <input type="checkbox"></input>
                      C3
                    </label>
                    <label>
                      <input type="checkbox"></input>
                      C4
                    </label>
                    <label>
                      <input type="checkbox"></input>
                      IgE
                    </label>
                  </div>

                </div>
                <div class="col">
                  <div class="row">
                    <div class="col">
                      <label>
                        <input type="checkbox"></input>
                        ImG
                      </label>
                      <label>
                        <input type="checkbox"></input>
                        ImG
                      </label>
                      <label>
                        <input type="checkbox"></input>
                        ImG
                      </label>
                      <label>
                        <input type="checkbox"></input>
                        ImG
                      </label>
                      <label>
                        <input type="checkbox"></input>
                        ImG
                      </label>
                      <label>
                        <input type="checkbox"></input>
                        ImG
                      </label>
                      
                    </div>
                    <div class="col">
                    <label>
                        <input type="checkbox"></input>
                        IgG
                      </label>
                    <label>
                        <input type="checkbox"></input>
                        IgG
                      </label>
                    <label>
                        <input type="checkbox"></input>
                        IgG
                      </label>
                    <label>
                        <input type="checkbox"></input>
                        IgG
                      </label>
                    <label>
                        <input type="checkbox"></input>
                        IgG
                      </label>
                    <label>
                        <input type="checkbox"></input>
                        IgG
                      </label>

                    </div>

                  </div>

                </div>

              </div>

            </div>
          </section>
          <section class="row">
            <input type="submit" value="Enviar" class="btnSubmit btn btn-primary"></input>
          </section>
        </form>
      </div>
    </div>
  );

}


export default App;
