import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'

class FilterMenu extends React.Component {
  state = {
    filteredLanguage: []
  }

  // handleCheckboxChange = (filter, event) => {
  //   let filteredLanguage = this.state.filteredLanguage
  //   filteredLanguage[filter.Language] = event.target.value
  //   this.setState({ value: event.target.value })
  // }

  render() {
    return (
      <div className="menu">
        <Menu disableAutoFocus>
          <div className="grouping-container">
            <div className="content-container">
              <div className="title-toggle-container">
                <p>English</p>
                <form>
                  <div className="switch-container position-relative form-group">
                    <label className="switch">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        // onChange={event =>
                        //   this.handleCheckboxChange(filter, event)
                        // }
                      />
                      <span className="slider round" />
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <div className="content-container">
              <div className="title-toggle-container">
                <p>Spanish</p>
                <form>
                  <div className="switch-container position-relative form-group">
                    <label className="switch">
                      <input type="checkbox" class="form-check-input" />
                      <span className="slider round" />
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="grouping-container">
            <div className="content-container">
              <div className="title-toggle-container">
                <p>French</p>
                <form>
                  <div className="switch-container position-relative form-group">
                    <label className="switch">
                      <input type="checkbox" class="form-check-input" />
                      <span className="slider round" />
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <div className="content-container">
              <div className="title-toggle-container">
                <p>German</p>
                <form>
                  <div className="switch-container position-relative form-group">
                    <label className="switch">
                      <input type="checkbox" class="form-check-input" />
                      <span className="slider round" />
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="grouping-container">
            <div className="content-container">
              <div className="title-toggle-container">
                <p>Chinese</p>
                <form>
                  <div className="switch-container position-relative form-group">
                    <label className="switch">
                      <input type="checkbox" class="form-check-input" />
                      <span className="slider round" />
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <div className="content-container">
              <div className="title-toggle-container">
                <p>Hindi</p>
                <form>
                  <div className="switch-container position-relative form-group">
                    <label className="switch">
                      <input type="checkbox" class="form-check-input" />
                      <span className="slider round" />
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="grouping-container">
            <div className="content-container">
              <div className="title-toggle-container">
                <p>Arabic</p>
                <form>
                  <div className="switch-container position-relative form-group">
                    <label className="switch">
                      <input type="checkbox" class="form-check-input" />
                      <span className="slider round" />
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <div className="content-container">
              <div className="title-toggle-container">
                <p>Portuguese</p>
                <form>
                  <div className="switch-container position-relative form-group">
                    <label className="switch">
                      <input type="checkbox" class="form-check-input" />
                      <span className="slider round" />
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="grouping-container">
            <div className="content-container">
              <div className="title-toggle-container">
                <p>Bengali</p>
                <form>
                  <div className="switch-container position-relative form-group">
                    <label className="switch">
                      <input type="checkbox" class="form-check-input" />
                      <span className="slider round" />
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <div className="content-container">
              <div className="title-toggle-container">
                <p>Japanese</p>
                <form>
                  <div className="switch-container position-relative form-group">
                    <label className="switch">
                      <input type="checkbox" className="form-check-input" />
                      <span className="slider round" />
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="grouping-container">
            <div className="content-container">
              <div className="title-toggle-container">
                <p>Russian</p>
                <form>
                  <div className="switch-container position-relative form-group">
                    <label className="switch">
                      <input type="checkbox" className="form-check-input" />
                      <span className="slider round" />
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <div className="content-container">
              <div className="title-toggle-container">
                <p>Lahnda</p>
                <form>
                  <div className="switch-container position-relative form-group">
                    <label className="switch">
                      <input type="checkbox" className="form-check-input" />
                      <span className="slider round" />
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="grouping-container">
            <div className="content-container">
              <div className="title-toggle-container">
                <p>Korean</p>
                <form>
                  <div className="switch-container position-relative form-group">
                    <label className="switch">
                      <input type="checkbox" className="form-check-input" />
                      <span className="slider round" />
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <div className="content-container">
              <div className="title-toggle-container">
                <p>Indonesian</p>
                <form>
                  <div className="switch-container position-relative form-group">
                    <label className="switch">
                      <input type="checkbox" className="form-check-input" />
                      <span className="slider round" />
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="grouping-container">
            <div className="content-container">
              <div className="title-toggle-container">
                <p>Turkish</p>
                <form>
                  <div className="switch-container position-relative form-group">
                    <label className="switch">
                      <input type="checkbox" className="form-check-input" />
                      <span className="slider round" />
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <div className="content-container">
              <div className="title-toggle-container">
                <p>Vietnamese</p>
                <form>
                  <div className="switch-container position-relative form-group">
                    <label className="switch">
                      <input type="checkbox" className="form-check-input" />
                      <span className="slider round" />
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Menu>
      </div>
    )
  }
}

export default FilterMenu
