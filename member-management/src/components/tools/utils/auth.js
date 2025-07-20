// ログイン認証
// 認証情報をローカルストレージに格納
// お試し版（ロールは全権限の9を指定）
export function loginUser(userName, password){
  if (userName === "99999" && password === "pass999"){
    const authInfo = {
      userName,
      lastActive: Date.now(),
      role: "9"
    };
    localStorage.setItem('auth', JSON.stringify(authInfo));
    return true;
  }
  return false;
}

// ローカルストレージから認証情報を削除
export function logoutUser(){
  localStorage.removeItem('auth');
}

// ローカルストレージから認証情報を取得
export function getAuth(){
  const auth = localStorage.getItem('auth');
  if(auth === "undefined" || auth === null){
    return null;
  }
  return auth;
}
