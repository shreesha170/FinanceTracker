'use server'
import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";


// export const signIn = async ({ email, password }:signInProps) => {
//     try{
//       const { account } = await createAdminClient();
//       const response = await account.createEmailPasswordSession(email, password);
//       return parseStringify(response);

//     }catch (error){
//       console.error('Error', error);
//     }
// }
export const signIn = async ({ email, password }: signInProps) => {
  try {
    const { account } = await createAdminClient();
    const response = await account.createEmailPasswordSession(email, password);

    // Set the session in cookies after successful sign-in
    (await cookies()).set("appwrite-session", response.secret, {
      // Add expiration and other cookie options as needed
    });

    return parseStringify(response);
  } catch (error) {
    console.error('Error', error);
  }
}

export const signUp = async (userData: SignUpParams) => {
    const { email, password, firstName, lastName } = userData;
    try{
        const { account } = await createAdminClient();

        const newUserAccount = await account.create(
            ID.unique(), 
            email, 
            password,
            `${firstName} ${lastName}`
        );
        const session = await account.createEmailPasswordSession(email, password);

        (await cookies()).set("appwrite-session", session.secret, {

  });
     return parseStringify(newUserAccount);
    }catch (error){
      console.error('Error', error);
    }
}
// ... your initilization functions

export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      const user = await account.get();
      return parseStringify(user);
    } catch (error) {
      return null;
    }
  }
  // export async function getLoggedInUser() {
  //   try {
  //     const { account } = await createSessionClient();
  //     // const result = await account.get();
  
  //     // const user = await getUserInfo({ userId: result.$id})
  
  //     return parseStringify(user);
  //   } catch (error) {
  //     console.log(error)
  //     return null;
  //   }
  // }
  export const logoutAccount = async () => {
    try {
      const { account } = await createSessionClient();
  
      (await cookies()).delete('appwrite-session');
  
      await account.deleteSession('current');
    } catch (error) {
      return null;
    }
  }
  
