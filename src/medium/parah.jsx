<br />
<div className="center">
  <br />
  <Nav tabs>
    <div onClick={this.toggleOverview}>
      {this.state.overviewTab === true ? (
        <NavItem>
          <NavLink href="#" active>
            Overview
          </NavLink>
        </NavItem>
      ) : (
        <div>
          <NavItem>
            <NavLink href="#">Overview</NavLink>
          </NavItem>
        </div>
      )}
    </div>
    <div onClick={this.toggleMenu}>
      {this.state.menuTab === true ? (
        <NavItem>
          <NavLink href="#" active>
            Menu
          </NavLink>
        </NavItem>
      ) : (
        <div>
          <NavItem>
            <NavLink href="#">Menu</NavLink>
          </NavItem>
        </div>
      )}
    </div>
    <div onClick={this.toggleLocation}>
      {this.state.locationTab === true ? (
        <NavItem>
          <NavLink href="#" active>
            Location
          </NavLink>
        </NavItem>
      ) : (
        <div>
          <NavItem>
            <NavLink href="#">Location</NavLink>
          </NavItem>
        </div>
      )}
    </div>
    <div onClick={this.toggleReview}>
      {this.state.reviewTab === true ? (
        <div>
          <div>
            <NavItem>
              <NavLink href="#" active>
                Reviews
              </NavLink>
            </NavItem>
          </div>
          <div>
            <Reviews />
          </div>
        </div>
      ) : (
        <div>
          <NavItem>
            <NavLink href="#">Reviews</NavLink>
          </NavItem>
        </div>
      )}
    </div>
  </Nav>
</div>

<ul className="nav nav-tabs nav-justified">
  {this.state.overviewTab === true ? (
    <li onClick={this.toggleOverview} className="active">
      <a href="#">Overview</a>
    </li>
  ) : (
    <li>
      <a href="#">Overview</a>
    </li>
  )}
  {this.state.menuTab === true ? (
    <li onClick={this.toggleMenu} className="active">
      <a href="#">Menu</a>
    </li>
  ) : (
    <li>
      <a href="#">Menu</a>
    </li>
  )}
  {this.state.locationTab === true ? (
    <li onClick={this.toggleLocation} className="active">
      <a href="#">Location</a>
    </li>
  ) : (
    <li>
      <a href="#">Location</a>
    </li>
  )}
  {this.state.reviewTab === true ? (
    <li onClick={this.toggleReview} className="active">
      <a href="#">Reviews</a>
    </li>
  ) : (
    <li>
      <a href="#">Reviews</a>
    </li>
  )}
</ul>
