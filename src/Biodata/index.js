import React, { Component } from 'react'
import { data } from './data'

export class Biodata extends Component {
  render() {
    return (
      <div>
        <h1 className="profile">PROFILE</h1>
        <section>
          <p className="isiprof">{ data.profle }</p>
          <img src={ data.image } className="img" />
          <bio>
            <h1>{ data.nama }</h1>
            <h1>{ data.umur } y.o</h1>
            <h1>{ data.alamat }</h1>
            <h1>{ data.menikah ? 'Sudah Menikah' : 'Belum Menikah' }</h1>
          </bio>
        </section>
        <hr />
        <h2 className="skill">SKILL</h2>
        <section>
          <frontend />
          <ul>
            <div className="frontend">
              <h3>Frontend</h3>
              {
                data.frontend.map( frontend => {
                  return (
                    <li>{ frontend }</li>
                  )
                } )
              }
            </div>
          </ul>
          <ul>
            <backend />
            <div className="backend">
              <h3>Backend</h3>
              {
                data.backend.map( backend => {
                  return (
                    <li>{ backend }</li>
                  )
                } )
              }
            </div>
          </ul>
        </section>
        <hr />
        <h1 className="profile">EXPERIENCE</h1>
        <section>
          <ul>
            <enginer />
            <div>
              <h3>Software Engineer</h3>
              {
                data.enginer.map( enginer => {
                  return (
                    <li>{ enginer }</li>
                  )
                } )
              }
            </div>
          </ul>
          <ul>
            <fire />
            <div>
              <h3>Fire Fighter</h3>
              {
                data.fire.map( fire => {
                  return (
                    <li>{ fire }</li>
                  )
                } )
              }
            </div>
          </ul>
        </section>

      </div >

    )
  }
}

export default Biodata
