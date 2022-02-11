export const environment = {
  production: false,
   baseUrl : 'https://localhost:5001/api/',
   
   vegPizza : {
    GetVegPizzaList: 'VegPizza/GetVegPizzaList',
    GetCustomisePizzaMaster: 'VegPizza/GetCustomisePizzaMaster'
  },
  auth : {
    login: 'Auth/Login',
    register: 'Auth/Register',
  } ,
  Order : {
    placeOrder: 'Order/PlaceOrder',
    getOrders: 'Order/GetOrders'

  }   
};