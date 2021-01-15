
import { home } from './home';
import { TvShows} from './TV shows';
import { Movies} from './Movies';
import { NewPopular} from '../Router/pages/New & popular';
import { MyList} from '../Router/pages/My list';

const layout = () => {
    if( location.pathname === "/home") {
        return home();
    }
    else if( location.pathname === "/TvShows") {
        return TvShows()
    }
    else if( location.pathname === "/Movies") {
        return Movies();
    }
    else if( location.pathname === "") {
        return NewPopular();
    }
    else if( location.pathname === "/MyList") {
        return MyList();
    }
}

export default layout