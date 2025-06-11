
const platos = [
  { nombre: "Paella Valenciana", descripcion: "Arroz con mariscos, pollo y verduras.", imagen: "https://res.cloudinary.com/tienda-com/image/upload/f_auto/q_auto/c_fill,w_752/dpr_2.0/v1/recipes/mixed-seafood-paella", precio: 5000 },
  { nombre: "Tacos al Pastor", descripcion: "Tortillas con cerdo adobado y piña.", imagen: "https://img.freepik.com/free-photo/close-up-delicious-tacos_23-2150831025.jpg", precio: 3500 },
  { nombre: "Sushi Variado", descripcion: "Sushi con salmón, atún y aguacate.", imagen: "https://img.freepik.com/free-photo/sushi-set-hot-rolls-avocado-california-salmon-rolls_141793-1279.jpg", precio: 4800 },
  { nombre: "Pizza Margarita", descripcion: "Pizza con tomate, mozzarella y albahaca.", imagen: "https://img.freepik.com/free-photo/freshly-baked-margherita-pizza-with-mozzarella-cheese-basil-leaves_9975-124847.jpg", precio: 4000 },
  { nombre: "Hamburguesa Clásica", descripcion: "Carne de res con queso y vegetales.", imagen: "https://img.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg", precio: 3700 },
  { nombre: "Pollo Asado", descripcion: "Pollo al horno con papas y especias.", imagen: "https://img.freepik.com/free-photo/baked-appetizing-whole-chicken-with-oranges-cranberries-oven-form-closeup_1220-6581.jpg", precio: 4200 },
  { nombre: "Ensalada César", descripcion: "Lechuga romana, pollo y aderezo césar.", imagen: "https://img.freepik.com/free-photo/caesar-salad-with-fried-shrimps_140725-3718.jpg", precio: 3100 },
  { nombre: "Ramen Japonés", descripcion: "Sopa oriental con fideos y huevo.", imagen: "https://img.freepik.com/free-photo/delicious-ramen-dark-surface_1150-41973.jpg", precio: 3900 },
  { nombre: "Ceviche Peruano", descripcion: "Pescado marinado con limón y ají.", imagen: "https://img.freepik.com/free-photo/closeup-delicious-salad-with-seafood-vegetables-bowl-table_181624-39561.jpg", precio: 4500 },
  { nombre: "Bife a lo Pobre", descripcion: "Carne con papas, cebolla y huevo.", imagen: "https://img.freepik.com/free-photo/grilled-pork-steak_1339-4486.jpg", precio: 4800 },
  { nombre: "Lasaña", descripcion: "Capas de pasta, carne y bechamel.", imagen: "https://img.freepik.com/free-photo/classic-lasagna-with-bolognese-sauce_2829-14066.jpg", precio: 3600 },
  { nombre: "Falafel", descripcion: "Croquetas de garbanzos con tahini.", imagen: "https://img.freepik.com/free-photo/tortilla-wrap-with-falafel-fresh-salad-vegan-tacos-vegetarian-healthy-food_2829-14389.jpg", precio: 2800 },
  { nombre: "Empanadas", descripcion: "Masa rellena de carne, horno o fritas.", imagen: "https://img.freepik.com/free-photo/view-delicious-food-dish_23-2150777845.jpg", precio: 2500 },
  { nombre: "Pad Thai", descripcion: "Fideos salteados con salsa y maní.", imagen: "https://img.freepik.com/free-photo/grilled-seafood-meal-with-prawn-scampi-generated-by-ai_188544-24697.jpg", precio: 4400 },
  { nombre: "Churrasco Italiano", descripcion: "Sándwich con palta, tomate y mayo.", imagen: "https://img.freepik.com/free-photo/grilled-beef-sandwich-ciabatta-with-salad-generated-by-ai_188544-21369.jpg", precio: 3300 },
  { nombre: "Arroz Chaufa", descripcion: "Arroz frito peruano con vegetales.", imagen: "https://img.freepik.com/free-photo/fried-rice-served-with-hot-syrup_157027-4061.jpg", precio: 2900 },
  { nombre: "Arepas", descripcion: "Pan de maíz relleno de queso o carne.", imagen: "https://img.freepik.com/free-photo/assortment-arepas-with-filling-plate_23-2148742392.jpg", precio: 2700 },
  { nombre: "Croissant de Jamón", descripcion: "Croissant relleno de jamón y queso.", imagen: "https://img.freepik.com/free-photo/croissant-sandwich-ham_1339-7779.jpg", precio: 2400 },
  { nombre: "Tallarines Verdes", descripcion: "Fideos con salsa de albahaca y queso.", imagen: "https://img.freepik.com/free-photo/top-view-delicious-pasta-table_23-2150857992.jpg", precio: 3200 },
  { nombre: "Sopaipillas", descripcion: "Masa frita típica chilena.", imagen: "https://img.freepik.com/free-photo/flat-lay-delicious-food-assortment_23-2148708215.jpg", precio: 2000 }
];


platos.forEach(plato => {
  const col = document.createElement("div");
  col.className = "col-md-4 mb-4";
  col.innerHTML = `
  <div class="card h-100 shadow-sm">
    <img src="${plato.imagen}" class="card-img-top" alt="${plato.nombre}" style="height: 200px; object-fit: cover;">
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">${plato.nombre}</h5>
      <p class="card-text">${plato.descripcion}</p>
      <p class="card-text fw-bold text-success">$${plato.precio.toLocaleString()}</p>
      <button class="btn btn-success mt-auto" onclick="añadirAlCarrito('${plato.nombre}')">Añadir al carrito</button>
    </div>
  </div>
`;

  menuContainer.appendChild(col);
});

 const dropdownLista = document.getElementById("dropdownLista");
const contadorCarrito = document.getElementById("contadorCarrito");
let carrito = [];

function añadirAlCarrito(nombre) {
  const plato = platos.find(p => p.nombre === nombre);
  const existente = carrito.find(p => p.nombre === nombre);

  if (existente) {
    existente.cantidad += 1;
  } else {
    carrito.push({ ...plato, cantidad: 1 });
  }

  actualizarDropdown();
}

function actualizarDropdown() {
  dropdownLista.innerHTML = "";

  if (carrito.length === 0) {
    dropdownLista.innerHTML = '<li class="text-muted px-3 py-2">Tu carrito está vacío</li>';
    contadorCarrito.textContent = 0;
    return;
  }

    carrito.forEach(plato => {
    const item = document.createElement("li");
    item.className = "dropdown-item d-flex justify-content-between align-items-center";

    item.innerHTML = `
      <div class="d-flex align-items-center gap-2 w-100 justify-content-between">
        <div class="d-flex align-items-center gap-2">
          <img src="${plato.imagen}" alt="${plato.nombre}" style="width: 40px; height: 40px; object-fit: cover;" class="rounded">
          <div>
            <div>${plato.nombre}</div>
            <div class="text-muted small">$${(plato.precio * plato.cantidad).toLocaleString()}</div>
          </div>
        </div>
        <div class="d-flex align-items-center gap-2">
          <input type="number" min="0" value="${plato.cantidad}" class="form-control form-control-sm" style="width: 60px;" />
          <button class="btn btn-sm btn-outline-danger">✖</button>
        </div>
      </div>
    `;

    const inputCantidad = item.querySelector("input");
    inputCantidad.addEventListener("change", () => {
      const nuevaCantidad = parseInt(inputCantidad.value);
      if (nuevaCantidad <= 0) {
        eliminarDelCarrito(plato.nombre);
      } else {
        const itemCarrito = carrito.find(p => p.nombre === plato.nombre);
        if (itemCarrito) {
          itemCarrito.cantidad = nuevaCantidad;
          actualizarDropdown();
        }
      }
    });

    const btn = item.querySelector("button");
    btn.onclick = () => eliminarDelCarrito(plato.nombre);

    dropdownLista.appendChild(item);
  });

  // Mostrar total
  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  const totalItem = document.createElement("li");
  totalItem.className = "dropdown-item text-end fw-bold border-top pt-2";
  totalItem.textContent = `Total: $${total.toLocaleString()}`;
  dropdownLista.appendChild(totalItem);

  // Botón realizar pedido
  const botonPedido = document.createElement("li");
  botonPedido.className = "dropdown-item text-center";
  botonPedido.innerHTML = `
    <a href="pago.html" class="btn btn-primary w-100 mt-2" onclick="guardarCarrito()">Realizar pedido</a>
  `;
  dropdownLista.appendChild(botonPedido);

  // Actualiza contador
  contadorCarrito.textContent = carrito.reduce((total, p) => total + p.cantidad, 0);
}


function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  localStorage.setItem("totalCarrito", total);
}


function actualizarContador() {
  contadorCarrito.textContent = carrito.length;
  if (carrito.length === 0) {
    dropdownLista.innerHTML = '<li class="text-muted">Tu carrito está vacío</li>';
  }
}

function eliminarDelCarrito(nombre) {
  carrito = carrito.filter(p => p.nombre !== nombre);
  actualizarDropdown();
}


  
  
  
