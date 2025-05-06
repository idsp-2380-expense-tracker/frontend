import { useRef } from "react"

interface UserProfileUploaderProps {
    onFileSelect: (file: File) => void
}

export default function UserProfileUploader({ onFileSelect }: UserProfileUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <input
        type="file"
        accept="image/*"
        hidden
        ref={inputRef}
        onChange={e => {
          const file = e.target.files?.[0]
          if (file) onFileSelect(file)
        }}
      />
      <a
        href="#"
        onClick={e => {
          e.preventDefault()
          inputRef.current?.click()
        }}
      >
        Change profile picture
      </a>
    </>
  )
}