import React from 'react'
import { slide as Menu } from 'react-burger-menu'

class FilterMenu extends React.Component {
  state = {
    currentFilters: []
  }
  checkBox = e => {
    if (e.target.checked === true) {
      this.setState(
        {
          currentFilters: this.state.currentFilters.concat(e.target.value)
        },
        () => {
          this.props.updateSites(
            this.props.sites.filter(f =>
              this.state.currentFilters.includes(f.language)
            )
          )
        }
      )
    } else {
      this.setState(
        {
          currentFilters: this.state.currentFilters.filter(
            f => f !== e.target.value
          )
        },
        () => {
          if (this.state.currentFilters.length === 0) {
            this.props.updateSites(this.props.sites)
          } else {
            this.props.updateSites(
              this.props.sites.filter(f =>
                this.state.currentFilters.includes(f.language)
              )
            )
          }
        }
      )
    }
  }

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
                        className="form-check-input"
                        value="English"
                        name="Language"
                        onChange={this.checkBox}
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
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value="Spanish"
                        name="Language"
                        onChange={this.checkBox}
                      />
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
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value="French"
                        name="Language"
                        onChange={this.checkBox}
                      />
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
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value="German"
                        name="Language"
                        onChange={this.checkBox}
                      />
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
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value="Chinese"
                        name="Language"
                        onChange={this.checkBox}
                      />
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
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value="Hindi"
                        name="Language"
                        onChange={this.checkBox}
                      />
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
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value="Arabic"
                        name="Language"
                        onChange={this.checkBox}
                      />
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
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value="Portuguese"
                        name="Language"
                        onChange={this.checkBox}
                      />
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
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value="Bengali"
                        name="Language"
                        onChange={this.checkBox}
                      />
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
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value="Japanese"
                        name="Language"
                        onChange={this.checkBox}
                      />
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
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value="Russian"
                        name="Language"
                        onChange={this.checkBox}
                      />
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
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value="Lahnda"
                        name="Language"
                        onChange={this.checkBox}
                      />
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
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value="Korean"
                        name="Language"
                        onChange={this.checkBox}
                      />
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
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value="Indonesian"
                        name="Language"
                        onChange={this.checkBox}
                      />
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
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value="Turkish"
                        name="Language"
                        onChange={this.checkBox}
                      />
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
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value="Vietnamese"
                        name="Language"
                        onChange={this.checkBox}
                      />
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
