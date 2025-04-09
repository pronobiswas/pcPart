
let component_modal = document.getElementById('component_modal');
let itemWarpper = document.createElement('div');
itemWarpper.classList.add('itemWarpper');


const cpu = [
  {
    title: "Intel 12th Gen Core i5-12400F Alder Lake Processor",
    price: "12450",
    brand: "intel",
    model: "Core i5-12400F",
    ClockSpeed: "2.50 GHz Up to 4.40 GHz",
    SupportedSocket: "LGA 1700",
    Cache: " L2: 3MB, L3: 16MB",
    core: "Cores-6 & Threads-12",
    Memory: "Speed: Up to 3200MHz",
    Image: "https://www.startech.com.bd/image/cache/catalog/processor/intel/i5-12400/i5-12400-001-500x500.jpg",
    descriptions: "The latest Intel Core i5-12400F processor featured with 6 Golden Cove. This 12th gen Core o comes with 6 cores and 12 threads. The P-cores (Golden Cove) will operate at a base frequency of 2.50 GHz and a maximum boost frequency of up to 4.40 GHz. The i5-12400F Alder Lake Processor will feature 25 MB of L3 cache and TDP values are maintained at 65 W (PL1). The latest Intel Core i5-12400F has six hyperthreaded P-cores, according to information from a Bilibili leaker spotted by Twitter user HXL. This Alder Lake model will not receive any energy-efficient E-cores. The higher-positioned models, Intel has previously confirmed. The processor would also have an 18MB L3 cache and a 65W TDP increase the clock it would be 4.4GHz on a single core and 4.0GHz on all cores.the Intel Core i5-12400F Alder Lake CPU will feature both DDR5 and DDR4 memory controllers. High-end motherboards will retain DDR5 while the more mainstream offerings will open up DDR4 support too. This 12th Gen Core i5 comes with Mobo Socket LGA 1700, 64 Bit Width, 2 Memory Channels with Maximum memory 256 GB capacity, it has thermal design power (TDP) rating of 65W. This Core i5 12th Gen processor has few expansion options also. The Core i5-12400F performs as well as these benchmarks suggest, it could become the budget gaming CPU of choice. As always, The recommand waiting until third-party reviews are up before drawing any performance conclusions. Intel has assured everyone that Alder Lake is still launching in 2021. The latest Intel 12th Gen Core i5-12400F offers a 03 years warranty (No Warranty for Fan or Cooler)."

  },
  {
    title: "AMD Ryzen 5 5600G Processor with Radeon Graphics (Chinese Edition)",
    price: "13300",
    brand: "AMD",
    model: "Ryzen 5 5600G",
    ClockSpeed: "3.9GHz up to 4.4GHz",
    SupportedSocket: "LGA 1700",
    Cache: " L2: 3MB, L3: 16MB",
    core: "Cores-6 & Threads-12",
    Memory: "Speed: Up to 3200MHz",
    Image: "https://www.startech.com.bd/image/cache/catalog/processor/amd/ryzen-5-5600g/ryzen-5-5600g-500x500.jpg",
    Description: "The AMD Ryzen 5 5600G Processor with Radeon Graphics is built in intelligence featuring 6 processor cores, 12 threads, and an astonishingly efficient 45-65W TDP. In this processor, It stands with 3.9GHz Base Clock, 4.4GHz Max Boost Clock, 3MB L2 Cache, 16MB L3 Cache with AM4 Package and TSMC 7nm FinFET CMOS. This processor is built with PCIe 3.0 x8 and Wraith Spire Thermal Solution. The AMD Ryzen 5 5600G Processor provides DDR4 Up to 3200MHz memory with 2 memory channels. With the high processing capability, this processor is also integrated with Radeon Graphics. The processor has a graphics frequency of 1900MHz and a graphics Core count of 7. The AMD Ryzen 5 5600G Processor is built for modern business, AMD technologies provide layers of protection, seamless manageability, and reliable longevity.In Bangladesh, you can get original AMD Ryzen 5 5600G Processor with Radeon Graphics (Chinese Edition) From Star Tech. We have a large collection of latest AMD Processsor to purchase for your Desktop PC. Order Online Or Visit your Nearest Star Tech Shop to get yours at lowest price. TheAMD Ryzen 5 5600G Processor with Radeon Graphics (Chinese Edition) has 3 year Warranty (No Warranty for Fan or Cooler)."

  },
  {
    title: "Intel 10th Gen Core i5-10400 Processor",
    price: "14250",
    brand: "	INTEL",
    model: "Intel Core i5-10400",
    ClockSpeed: "2.90 GHz up to 4.30 GHz",
    SupportedSocket: "LGA 1700",
    Cache: " L2: 3MB, L3: 16MB",
    core: "Cores-6 & Threads-12",
    Memory: "Speed: Up to 3200MHz",
    Image: "https://www.startech.com.bd/image/cache/catalog/processor/Intel/i5-10400/i5-10400-1-500x500.jpg",
    Description: "This i5-10400 Processor comes with an Intel UHD Graphics 630 graphics. This new 10th gen Comet Lake microarchitecture is manufactured with the 14nm process that comes with six cores but lacks in HyperThreading. As this chip is updated to the latest BIOS revision, it nicely fits into any Intel 400-series motherboard. Focusing on this, all the major motherboard manufacturers have already started BIOS updates for their 400-series lineup. These Processors also support 64-bit computing on Intel architecture require an Intel 64 architecture-enabled BIOSIntel 10th Generation Core i5-10400 Processor having the base frequency of 2.90 GHz that can be reached as max turbo frequency at 4.30 GHz. It has the SmartCache of 12 MB containing 6 cores and 12 threads. With the bus speed of 8 GT/s DMI3, it has thermal design power (TDP) rating of 65W. This latest microchip has few expansion options such 3.0 PCI express revision having configured up to 1x16, 2x8, 1x8+2x4, and maximum 16 lanes. Considering the memory this processor has dual-channel of max 128GB of the size that supports up to DDR4-2666 bus speed. Intel 10th Gen Core i5-10400 Processor 03 Years Warranty (No Warranty for Fan or Cooler)"

  },
  {
    title: "Intel 5th Gen Core i7 5930K Processor",
    price: "10250",
    brand: "	INTEL",
    model: "Core i7 5930K",
    ClockSpeed: " up to 3.70 GHz",
    SupportedSocket: "LGA 1700",
    Cache: "15MB Intel Smart Cache",
    core: "6, Threads: 12",
    Memory: "Speed: Up to 3200MHz",
    Image: "https://www.startech.com.bd/image/cache/catalog/processor/Intel/core-i7-5930k/core-i7-5930k-01-500x500.webp",
    Description: "The intel 5th Gen Core i7 5930K Processor delivers astounding performance for massively threaded interactive games. The Intel Core i7 CPU distributes AI, physics, and rendering across twelve software threads, allowing you to focus on taking down the bad guys while your PC manages all the visual aspects like texturing and shading that keep you involved. It's a gaming experience so good that you could lose yourself in it. It's time to start creating digital material that's only limited by your ideas. Enjoy complete creative flexibility with the ability to encode video up to 40% quicker. Also, take advantage of the outstanding performance on other multimedia jobs like picture rendering, photo retouching, and editing. The Intel 5th Gen Core i7 5930K Processor comes with a 01-month warranty."

  }
]
const prosesor = [
  {
    title: "AMD Ryzen 7 5700X 8-Core, 16-Thread Unlocked Desktop Processor",
    image: "https://m.media-amazon.com/images/I/3116WnNTPKL._SL500_.jpg",
    price: "$151.32",
    url: "https://www.amazon.com/dp/B09VCHQHZ6?tag=pcbuildpartscom-20&linkCode=osi&th=1&psc=1"
  },
  {
    title: "AMD Ryzen 5 5500 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler",
    image: "https://m.media-amazon.com/images/I/31EzTuimorL._SL500_.jpg",
    price: "$80.99",
    url: "https://www.amazon.com/dp/B09VCJ171S?tag=pcbuildpartscom-20&linkCode=osi&th=1&psc=1"
  },
  {
    title: "AMD Ryzen™ 9 9900X 12-Core, 24-Thread Unlocked Desktop Processor",
    image: "https://m.media-amazon.com/images/I/41k-qInPV7L._SL500_.jpg",
    price: "$407.45",
    url: "https://www.amazon.com/dp/B0D6NN87T8?tag=pcbuildpartscom-20&linkCode=osi&th=1&psc=1"
  },
  {
    title: "AMD Ryzen™ 7 9700X 8-Core, 16-Thread Unlocked Desktop Processor",
    image: "https://m.media-amazon.com/images/I/41tUy4Z4RpL._SL500_.jpg",
    price: "$329.00",
    url: "https://www.amazon.com/dp/B0D6NMDNNX?tag=pcbuildpartscom-20&linkCode=osi&th=1&psc=1"
  },
  {
    title: "Intel Core i7-12700KF Desktop Processor 12 (8P+4E) Cores up to 5.0 GHz Unlocked LGA1700 600 Series Chipset 125W",
    image: "https://m.media-amazon.com/images/I/41S0TSQIjsL._SL500_.jpg",
    price: "$189.99",
    url: "https://www.amazon.com/dp/B09FXKHN7M?tag=pcbuildpartscom-20&linkCode=osi&th=1&psc=1"
  },
  {
    title: "AMD Ryzen 5 7600X 6-Core, 12-Thread Unlocked Desktop Processor",
    image: "https://m.media-amazon.com/images/I/21HJPNaWRnL._SL500_.jpg",
    price: "$197.00",
    url: "https://www.amazon.com/dp/B0BBJDS62N?tag=pcbuildpartscom-20&linkCode=osi&th=1&psc=1"
  },
  {
    title: "AMD Ryzen 7 5700 8-Core, 16-Thread Desktop Processor",
    image: "https://m.media-amazon.com/images/I/41mG-9GZkCL._SL500_.jpg",
    price: "$126.80",
    url: "https://www.amazon.com/dp/B0CQ4HPJYV?tag=pcbuildpartscom-20&linkCode=osi&th=1&psc=1"
  },
  {
    title: "AMD Ryzen 7 5800X 8-core, 16-thread unlocked desktop processor",
    image: "https://m.media-amazon.com/images/I/41t0HDY4O+L._SL500_.jpg",
    price: "$170.99",
    url: "https://www.amazon.com/dp/B0815XFSGK?tag=pcbuildpartscom-20&linkCode=osi&th=1&psc=1"
  },
  {
    title: "AMD RYZEN 7 9800X3D 8-Core, 16-Thread Desktop Processor",
    image: "https://m.media-amazon.com/images/I/41ArEZ7Rm6L._SL500_.jpg",
    price: "$479.00",
    url: "https://www.amazon.com/dp/B0DKFMSMYK?tag=pcbuildpartscom-20&linkCode=osi&th=1&psc=1"
  },
  {
    title: "Intel® CoreTM i5-14600K New Gaming Desktop Processor 14 (6 P-cores + 8 E-cores) with Integrated Graphics - Unlocked",
    image: "https://m.media-amazon.com/images/I/41ab2q5sgsL._SL500_.jpg",
    price: "$208.00",
    url: "https://www.amazon.com/dp/B0CGJ9STNF?tag=pcbuildpartscom-20&linkCode=osi&th=1&psc=1"
  }
];

function openAsideMenu() {
  const asideMenu = document.querySelector(".asideMenu");
  asideMenu.style.display = "block";
}
function closeAsideMenu() {
  const asideMenu = document.querySelector(".asideMenu");
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

function component_card_modal(event, id) {
  component_modal.style.display = "block";
  // console.log(id);
  // console.log(event.srcElement);
  // let itemWarpper = document.createElement('div');

  if (id === "CHASSIS") {
    itemWarpper.innerHTML = `
    <div class="test_warpper">

          ${prosesor.map(prosesor=>
            `
            <div class="itemcard">
              <div class="productImage">
              <img src= "${prosesor.image}" alt="png">
              </div>
              <h3 class="product_title">${prosesor.title}</h3>
              <p class="product_category">Prosesor</p>
              <div class="productPrice">
                <span class="old_price">${prosesor.price}</span>
                <div class="new_price">1100</div>
              </div>
            </div>
          `).join('')}

    </div>
    `
    component_modal.appendChild(itemWarpper);

  }

  if (id === "CPU") {
    console.log(cpu[0].Image);

    itemWarpper.innerHTML = `
  <div class="test_warpper">
    ${cpu.map(cpu =>
      `
      
      <div class="itemcard">
        <div class="productImage">
        <img src= "${cpu.Image}" alt="png">
        </div>
        <h3 class="product_title">${cpu.title}</h3>
        <p class="product_category">${cpu.model}</p>
        <div class="productPrice">
          <span class="old_price">${cpu.price}</span>
          <div class="new_price">1100</div>
        </div>
      </div>
    `).join('')}
  </div>
`;



    component_modal.appendChild(itemWarpper);

  }


}
function closeModal() {
  component_modal.style.display = "none";
  itemWarpper.innerHTML = ""
}