let instance = null;

class DataService {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  addWishListItem = item => {
    wishList.push(item);
  }

  removeWishListItem = item => {
    for (var x = 0; x < wishList.length; x++) {
      if (wisListh[x]._id === item._id) {
        wishList.splice(x, 1);
        break;
      }
    }

  }
}

export default DataService;

