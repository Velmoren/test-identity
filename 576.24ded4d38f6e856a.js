(self.webpackChunkmyrtex_mf_identity=self.webpackChunkmyrtex_mf_identity||[]).push([[576],{4576:(K,p,r)=>{r.r(p),r.d(p,{AuthModule:()=>C,UserActionEnum:()=>i,loginCheck:()=>E,loginError:()=>u,loginOut:()=>L,loginPending:()=>_,loginSuccess:()=>d,selectUser:()=>m,selectUserIsLoading:()=>R,selectUserIsLogin:()=>y,selectUserState:()=>h});var o=r(2331),v=r(8701),t=r(9866),n=r(2393),s=r(2778),f=r(4866),U=r(4411),D=r(2057),i=function(e){return e.LoginPending="[User] Login Pending",e.LoginSuccess="[User] Login Success",e.LoginError="[User] Login Error",e.LoginCheck="[User] Login Check",e.LoginOut="[User] Login Out",e}(i||{});const _=(0,t.createAction)(i.LoginPending,(0,t.props)()),d=(0,t.createAction)(i.LoginSuccess,(0,t.props)()),u=(0,t.createAction)(i.LoginError),E=(0,t.createAction)(i.LoginCheck),L=(0,t.createAction)(i.LoginOut),S=(0,t.createReducer)({user:{login:"",password:""},isLoading:!1,isLogin:!1},(0,t.on)(_,e=>({...e,isLoading:!0})),(0,t.on)(d,(e,{user:M})=>({...e,isLoading:!1,user:M})),(0,t.on)(u,e=>({...e,isLoading:!1})),(0,t.on)(E,e=>({...e,isLoading:!0})),(0,t.on)(L,e=>({...e,user:{login:"",password:""}})));function P(e,M){return S(e,M)}let A=(()=>{class e{constructor(c){this._http=c}getUser(c){return this._http.get("https://testdb-a01ea-default-rtdb.firebaseio.com/data.json")}static#e=this.\u0275fac=function(a){return new(a||e)(o.\u0275\u0275inject(U.HttpClient))};static#t=this.\u0275prov=o.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),I=(()=>{class e{constructor(c,a,j,T){this.actions$=c,this.store=a,this.userService=j,this._router=T,this.login$=(0,n.createEffect)(()=>this.actions$.pipe((0,n.ofType)(_),(0,s.switchMap)(({user:g})=>this.userService.getUser(g).pipe((0,s.map)(l=>d({user:l})),(0,s.catchError)(this.catchErrorHandler),(0,s.tap)(l=>{l&&(localStorage.setItem("isAuth","true"),this._router.navigate(["./"]))}))))),this.checkLogin$=(0,n.createEffect)(()=>this.actions$.pipe((0,n.ofType)(E),(0,s.switchMap)(()=>{const g=localStorage.getItem("isAuth");return g&&JSON.parse(g)?this.userService.getUser().pipe((0,s.map)(B=>d({user:B})),(0,s.catchError)(this.catchErrorHandler)):(0,f.of)(u())}))),this.logout$=(0,n.createEffect)(()=>this.actions$.pipe((0,n.ofType)(L),(0,s.switchMap)(()=>(localStorage.removeItem("isAuth"),(0,f.of)(u()))))),this.catchErrorHandler=(g,l)=>(0,f.of)(u())}static#e=this.\u0275fac=function(a){return new(a||e)(o.\u0275\u0275inject(n.Actions),o.\u0275\u0275inject(t.Store),o.\u0275\u0275inject(A),o.\u0275\u0275inject(D.Router))};static#t=this.\u0275prov=o.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac})}return e})(),C=(()=>{class e{static#e=this.\u0275fac=function(a){return new(a||e)};static#t=this.\u0275mod=o.\u0275\u0275defineNgModule({type:e});static#r=this.\u0275inj=o.\u0275\u0275defineInjector({imports:[v.CommonModule,t.StoreModule.forFeature("user",P),n.EffectsModule.forFeature([I])]})}return e})();const h=(0,t.createFeatureSelector)("user"),m=(0,t.createSelector)(h,e=>e?.user),y=(0,t.createSelector)(h,e=>e?.isLogin),R=(0,t.createSelector)(h,e=>e?.isLoading)}}]);