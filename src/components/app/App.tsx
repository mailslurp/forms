import React, {useState} from 'react';
import './App.css';
import Config from "../../config";
import Settings from "../settings-input/SettingsInput";
import {Container} from "../common/Container";
import Step from "../common/Step";
import HTMLDisplay from "../html-display/HTMLDisplay";
import FormBuilder from "../form-builder/FormBuilder";
import {FormElements, FormMeta} from "../../lib/types";

function App() {
  const [formMeta, setFormMeta] = useState<FormMeta | undefined>(undefined)
  const [formElements, setFormElements] = useState<FormElements>({})
  return (
    <main className="app">
      <Container>
        <div className="d-flex justify-content-start align-items-baseline mb-3">
          <h1 className="font-weight-bolder">{Config.appName}</h1>
          <small className="ml-3">
            <span className="text-muted font-italic">Powered by</span>
            <a href={Config.hrefs.mailslurp} className="font-weight-bold ml-1">MailSlurp APIs</a>
          </small>
        </div>
        <p className="lead text-secondary mb-0">Create embeddable HTML forms that submit directly <strong
          className="font-weight-bold">to your email address</strong>. No code or server required. Free forever. <span
          role="img"
          aria-label="Money with wings"
          className="cash-money-baby">💸</span></p>
      </Container>
      <hr className="m-0 p-0"/>
      <div className="bg-light">

        <Container>
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="pb-5">
                <Step
                  title="Set options:"
                  step={1}>
                  <Settings
                    formMeta={formMeta}
                    onChange={f => setFormMeta(f)}
                  />
                </Step>
              </div>
              <div className="pb-5">
                <Step title="Add form inputs:" step={2}>
                  <FormBuilder
                    formElements={formElements}
                    onChange={ff => {
                      console.log("form build changer", ff)
                      setFormElements(ff)
                    }}
                  />
                </Step>
              </div>
              <div className="pb-5">
                <Step title="Include HTML on your website:" step={3}>
                  <HTMLDisplay
                    formMeta={formMeta}
                    formElements={formElements}
                  />
                </Step>
              </div>
              <div className="pb-0">
                <Step
                  title="Receive submissions directly to your email address. Files sent as attachments."
                  step={4}/>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <hr className="m-0 p-0"/>
      <footer className="py-5 text-center">
        <small className="text-secondary small">Build by MailSlurp. Free for personal use. See form documentation for
          more <a href={Config.hrefs.mailslurp}>Email APIs</a>.</small>
      </footer>
    </main>
  );
}

export default App;
