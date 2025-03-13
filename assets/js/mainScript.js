let component_modal = document.getElementById('component_modal');
let itemWarpper = document.createElement('div');
itemWarpper.classList.add('itemWarpper');
function openAsideMenu(){
  const asideMenu =  document.querySelector(".asideMenu");
  asideMenu.style.display = "block";
}
function closeAsideMenu(){
    const asideMenu =  document.querySelector(".asideMenu");
  asideMenu.style.display = "none";
}
// =====nav &N tabs=======
function openTab(event, tabId) {
  let tabButtons = document.querySelectorAll(".tab-btn");
  let tabContents = document.querySelectorAll(".tab-content");
  
  tabButtons.forEach(btn => btn.classList.remove("active"));
  tabContents.forEach(content => content.classList.remove("active"));
  
  event.currentTarget.classList.add("active");
  document.getElementById(tabId).classList.add("active");
}

function component_card_modal (event, id) {
  component_modal.style.display = "block";
  // console.log(id);
  // console.log(event.srcElement);
  // let itemWarpper = document.createElement('div');

  if(id ==="CHASSIS"){
    itemWarpper.innerHTML = `
    <div class="test_warpper">
          <div class="itemcard">
              <div class="productImage"></div>
              <h3 class="product_title"></h3>
              <p class="product_category"></p>
              <div class="productPrice">
                  <span class="old_price"></span>
                  <div class="new_price"></div>
              </div>
          </div>
  
          <div class="itemcard">
              <div class="productImage"></div>
              <h3 class="product_title"></h3>
              <p class="product_category"></p>
              <div class="productPrice">
                  <span class="old_price"></span>
                  <div class="new_price"></div>
              </div>
          </div>
  
          <div class="itemcard">
              <div class="productImage"></div>
              <h3 class="product_title"></h3>
              <p class="product_category"></p>
              <div class="productPrice">
                  <span class="old_price"></span>
                  <div class="new_price"></div>
              </div>
          </div>
      </div>
    `
    component_modal.appendChild(itemWarpper);

  }

  if(id ==="CPU"){
    itemWarpper.innerHTML = `
    <div class="test_warpper">
          <div class="itemcard">
              <div class="productImage">CPU</div>
              <h3 class="product_title">CPU TITLE</h3>
              <p class="product_category"> CPU CAREGORY</p>
              <div class="productPrice">
                  <span class="old_price">1200</span>
                  <div class="new_price">1100</div>
              </div>
          </div>
  
          <div class="itemcard">
              <div class="productImage">CPU</div>
              <h3 class="product_title">CPU TITLE</h3>
              <p class="product_category"> CPU CAREGORY</p>
              <div class="productPrice">
                  <span class="old_price">1200</span>
                  <div class="new_price">1100</div>
              </div>
          </div>
  
          <div class="itemcard">
              <div class="productImage">CPU</div>
              <h3 class="product_title">CPU TITLE</h3>
              <p class="product_category"> CPU CAREGORY</p>
              <div class="productPrice">
                  <span class="old_price">1200</span>
                  <div class="new_price">1100</div>
              </div>
          </div>
      </div>
    `
    component_modal.appendChild(itemWarpper);

  }
  
  
}
function closeModal(){
  component_modal.style.display = "none";
  itemWarpper.innerHTML = ""
}