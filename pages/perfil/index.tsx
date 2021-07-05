import React, { useEffect } from 'react'
import { useAuthContext } from 'context/user'
import { useRouter } from 'next/router'
import UserCard from 'components/UserCard'
import Layout from 'layout'

const Profile = (): JSX.Element => {
  const { logged, user, called } = useAuthContext()
  const route = useRouter()

  useEffect(() => {
    if (called && !logged) {
      route.push('/entrar')
    }
  }, [logged, called])

  return (
    <Layout title={user.fullName}>
      {user && <UserCard user={user} isOwner />}
    </Layout>
  )
}

export default Profile
