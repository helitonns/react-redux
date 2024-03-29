import createAsyncSlice from './helper/createAsynsSice';

const slice = createAsyncSlice({
  name: "photos",
  fetchConfig: ()=> ({
    url: "https://dogsapi.origamid.dev/json/api/photo/?_page=1&total=6&_user=0",
    options: {
      method: "GET",
      cache: "no-store"
    }
  })
});

export const fetchPhotos = slice.asyncAction;

export default slice.reducer;