import NotificatinService, {NOTIF_WISHLIST_CHANGED} from './notification-service';

let ns = new NotificatinService();

let instance = null;
var wishList = [];

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

    ns.postNotification(NOTIF_WISHLIST_CHANGED, wishList);

  }

  removeWishListItem = item => {
    for (var x = 0; x < wishList.length; x++) {

      if (wishList[x]._id === item._id) {
        wishList.splice(x, 1);
        ns.postNotification(NOTIF_WISHLIST_CHANGED, wishList);        

      if (wisListh[x]._id === item._id) {
        wishList.splice(x, 1);
        break;
      }
    }

  }
}

export default DataService;