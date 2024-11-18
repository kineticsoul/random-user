'use client'

import { getActiveSection, getDataForUI, getRandomUser } from '@/lib/data-service'
import { DataForUI, RandomUser } from '@/types/types'
import { useEffect, useState } from 'react'
import styles from './card.module.scss'
import Image from 'next/image'

export const Card = () => {
    const [loading, setLoading] = useState(true)
    const [uiData, setUiData] = useState<DataForUI[]>()
    const [user, setUser] = useState<RandomUser>()
    const [activeSection, setActiveSection] = useState<DataForUI>()

    /* Launch the data fetching via await
    useEffect(() => {
        // Define te data fetch function
        async function fetchData() {
            setUser(await getRandomUser())
        }
        // Call the funtion
        if (!user) {
            fetchData()
        }
    }, [])

    Assign UI data after await
    useEffect(() => {
        if (user)
            setUiData(getDataForUI(user as RandomUser))
    }, [user])

    // Set active section
    useEffect(() => {
        if(uiData) {
        setActiveSection(uiData, 0)
    }, [uiData])
    */


    // Fetch data via promise
    useEffect(() => {
        getRandomUser().then((response) => {
            console.log('aaaa', response)
            setUser(response)
            setUiData(getDataForUI(response))
        }).catch((e) => {
            console.error('error', e)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    if (activeSection)
        console.log(activeSection)


    if (loading && !user) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    if (uiData && user) {
        if (!activeSection) {
            setActiveSection(getActiveSection(uiData, 0))
        }
        return (
            <div className={styles.card_wrapper}>
                <div className={styles.card_header}>
                    <div className={styles.profile_container}>
                        <img className={styles.profile_image}
                            src={activeSection?.photo.toString()}
                            alt='Profile image'
                        />
                    </div>
                </div>

                <div className={styles.card_body}>

                    <div className={styles.details}>
                        <span className={styles.info_label}>{activeSection?.label}</span>
                        <span className={styles.info_value}>{activeSection?.value}</span>
                    </div>

                    <div className={styles.icons}>
                        {uiData.map((field, key) => {
                            return (
                                <div className={`${styles.icon_wrapper} ${(field.key === activeSection?.key) && styles.active}`} key={key}>
                                    <Image
                                        className={`${styles.icon} ${(field.key === activeSection?.key) && styles.active}`}
                                        alt='user-icon'
                                        src={field.key === activeSection?.key ? field.activeIcon : field.icon}
                                        key={key}
                                        onMouseOver={() => setActiveSection(getActiveSection(uiData, key))}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
