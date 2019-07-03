import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'

class FilterMenu extends React.Component {
  showSettings(event) {
    event.preventDefault()
  }

  render() {
    return (
      <div className="menu">
        <Menu disableAutoFocus>
          <div class="grouping-container">
            <div class="content-container">
              <div class="title-toggle-container">
                <p>English</p>
                <form>
                  <div class="switch-container position-relative form-group">
                    <label class="switch">
                      <input type="checkbox" class="form-check-input" />
                      <span class="slider round" />
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <div class="content-container">
              <div class="title-toggle-container">
                <p>Spanish</p>
                <form>
                  <div class="switch-container position-relative form-group">
                    <label class="switch">
                      <input type="checkbox" class="form-check-input" />
                      <span class="slider round" />
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="grouping-container">
            <div class="content-container">
              <div class="title-toggle-container">
                <p>French</p>
                <form>
                  <div class="switch-container position-relative form-group">
                    <label class="switch">
                      <input type="checkbox" class="form-check-input" />
                      <span class="slider round" />
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <div class="content-container">
              <div class="title-toggle-container">
                <p>German</p>
                <form>
                  <div class="switch-container position-relative form-group">
                    <label class="switch">
                      <input type="checkbox" class="form-check-input" />
                      <span class="slider round" />
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="grouping-container">
            <div class="content-container">
              <div class="title-toggle-container">
                <p>Chinese</p>
                <form>
                  <div class="switch-container position-relative form-group">
                    <label class="switch">
                      <input type="checkbox" class="form-check-input" />
                      <span class="slider round" />
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <div class="content-container">
              <div class="title-toggle-container">
                <p>Hindi</p>
                <form>
                  <div class="switch-container position-relative form-group">
                    <label class="switch">
                      <input type="checkbox" class="form-check-input" />
                      <span class="slider round" />
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="grouping-container">
            <div class="content-container">
              <div class="title-toggle-container">
                <p>Arabic</p>
                <form>
                  <div class="switch-container position-relative form-group">
                    <label class="switch">
                      <input type="checkbox" class="form-check-input" />
                      <span class="slider round" />
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <div class="content-container">
              <div class="title-toggle-container">
                <p>Portuguese</p>
                <form>
                  <div class="switch-container position-relative form-group">
                    <label class="switch">
                      <input type="checkbox" class="form-check-input" />
                      <span class="slider round" />
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="grouping-container">
            <div class="content-container">
              <div class="title-toggle-container">
                <p>Bengali</p>
                <form>
                  <div class="switch-container position-relative form-group">
                    <label class="switch">
                      <input type="checkbox" class="form-check-input" />
                      <span class="slider round" />
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <div class="content-container">
              <div class="title-toggle-container">
                <p>Japanese</p>
                <form>
                  <div class="switch-container position-relative form-group">
                    <label class="switch">
                      <input type="checkbox" class="form-check-input" />
                      <span class="slider round" />
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="grouping-container">
            <div class="content-container">
              <div class="title-toggle-container">
                <p>Russian</p>
                <form>
                  <div class="switch-container position-relative form-group">
                    <label class="switch">
                      <input type="checkbox" class="form-check-input" />
                      <span class="slider round" />
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <div class="content-container">
              <div class="title-toggle-container">
                <p>Lahnda</p>
                <form>
                  <div class="switch-container position-relative form-group">
                    <label class="switch">
                      <input type="checkbox" class="form-check-input" />
                      <span class="slider round" />
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="grouping-container">
            <div class="content-container">
              <div class="title-toggle-container">
                <p>Korean</p>
                <form>
                  <div class="switch-container position-relative form-group">
                    <label class="switch">
                      <input type="checkbox" class="form-check-input" />
                      <span class="slider round" />
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <div class="content-container">
              <div class="title-toggle-container">
                <p>Indonesian</p>
                <form>
                  <div class="switch-container position-relative form-group">
                    <label class="switch">
                      <input type="checkbox" class="form-check-input" />
                      <span class="slider round" />
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="grouping-container">
            <div class="content-container">
              <div class="title-toggle-container">
                <p>Turkish</p>
                <form>
                  <div class="switch-container position-relative form-group">
                    <label class="switch">
                      <input type="checkbox" class="form-check-input" />
                      <span class="slider round" />
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <div class="content-container">
              <div class="title-toggle-container">
                <p>Vietnamese</p>
                <form>
                  <div class="switch-container position-relative form-group">
                    <label class="switch">
                      <input type="checkbox" class="form-check-input" />
                      <span class="slider round" />
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
