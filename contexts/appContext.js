import React, {createContext, useState, useEffect, useContext, useMemo, } from 'react'
import getConfig from 'next/config'
import { useRouter } from 'next/router'

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;

const AppContext = createContext()

export const AppContextProvider = ({children}) =>{
    const [user, setUser] = useState(null)
    const [userTasks, setUserTasks] = useState([])
    const [departments, setDepartments] = useState([])
    const router = useRouter()
  
    useEffect(() => {       
        if(!user)
            router.push('/')
        
    },[])
    
    const login = async (username, password) =>{
         
        return await axios.post(`${baseUrl}/authenticate`, { username, password })
        .then(res => {        
            const user = res.data;     
            setUser(user);
            localStorage.setItem('user', JSON.stringify(user));
            router.push('/');
        })
        .catch( (error) => {
            console.log('catch');
            console.log(error);
        });                
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('user');
        router.push('/');
    }

    const register = async (firstName, lastName, username, password, departmentId, userImageFile) => {
                
        return await axios.post(`${baseUrl}/register`, { firstName, lastName, username, password, departmentId })
        .then(res => {   
           
            const user = res.data;
         
            const data = new FormData();
            data.append("image", userImageFile);
            data.append("name", user.username);
            data.append("id", user.id);
            
            axios.post(`${baseUrl}/upload`, data, { headers: { 'content-type': 'multipart/form-data' } })
            .then(res => { 
                console.log(res.statusText)
            })

            router.push('/login');    
        })
        .catch( (error) => {
            console.log(error);
        });               
    }
    
    const getDepartments = async() =>{
                
        return await axios.get(`${baseUrl}/departments`)
        .then( res => {      
           
            setDepartments(res.data); 
        })
        .catch( (error) => {            
            console.log(error);
        });               
    }

    const getUserTasks = async(username) => {
        return await axios.get(`${baseUrl}/tasks?uid=${ username }` )
        .then( res => {   
            console.log(res.data)
            setUserTasks([...res.data])            
        })
        .catch( (error) => {            
            console.log(error);
        });   
    }

    const getTaskById = async(taskId) => {
        return await axios.get(`${baseUrl}/tasks?tid=${ taskId }` )
        .then( res => {  
            return res.data;    
                  
        })
        .catch( (error) => {            
            console.log(error);
        });   
    }

    const saveTask = (username ,taskTitle, taskComment, taskDate, taskTheme, taskStatus) => {
        return axios.post(`${baseUrl}/tasks`, 
            { 
                username ,
                title: taskTitle, 
                comment: taskComment,
                dueDate: taskDate, 
                theme: taskTheme ,
                status: taskStatus ,
            })
        .then( res => {      
           
            
        })
        .catch( (error) => {            
            console.log(error);
        });   
    }

    const updateTask = async(id, task) => {
        console.log('axios.put')
        return await axios.put(`${baseUrl}/tasks?tid=${id}`, 
            {               
                ...task 
            })
        .then( res => {      
           
            
        })
        .catch( (error) => {            
            console.log(error);
        });   
    }

    const getcategories = async() => {
        return await axios.post(`${baseUrl}/categories`, 
            { 
                id ,
                title              
            })
        .then( res => {      
           
            
        })
        .catch( (error) => {            
            console.log(error);
        });  
    
      };
      const getQuestions = async() => {
        return await axios.post(`${baseUrl}/questions`, 
            { 
                id ,
                question, 
                options,
                answer, 
                isDeleted 
            })
        .then( res => {      
           
            
        })
        .catch( (error) => {            
            console.log(error);
        });  
    
      };
    // const contextValue = useMemo(() => { 
    //     return {
    //         user, 
    //         login, 
    //         logout, 
    //         register, 
    //         departments,
    //         getDepartments,
    //         userTasks, 
    //         getUserTasks, 
    //         saveTask
    //     };  
    // }, [user, departments, userTasks]);
    const contextValue = {
                        user, 
                        login, 
                        logout, 
                        register, 
                        departments,
                        getDepartments,
                        userTasks, 
                        getUserTasks, 
                        getTaskById,
                        saveTask,
                        updateTask
                    }
    return(
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
	return useContext(AppContext);
}