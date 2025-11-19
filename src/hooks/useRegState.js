import { useState } from "react";
import { useTelegram } from "./useTelegram";

export function useRegState() {
    const [step, setStep] = useState(1);
    const { user, queryId } = useTelegram();
    const [isAgreed, setIsAgreed] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [cityId, setCityId] = useState(null);
    const [selectedCity, setSelectedCity] = useState(false);
    const [castomTag, setCastomTag] = useState(null);
    return {
        step,
        setStep,
        user,
        queryId,
        isAgreed,
        setIsAgreed,
        phoneNumber,
        setPhoneNumber,
        cityId,
        setCityId,
        castomTag,
        setCastomTag,
    };
}
