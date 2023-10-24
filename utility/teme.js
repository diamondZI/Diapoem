import { useThemeterStor } from "@/store/theme.js"
export function Theme(){
	 const Theme=useThemeterStor()
	 return {Theme}
}