import { useQuery } from 'react-query'
import analyticsService from '../services/analyticsService'

export const useAnalytics = () => {
  const { data: weeklyData, isLoading: weeklyLoading } = useQuery(
    'weeklyAnalytics',
    () => analyticsService.getWeeklyData(),
    {
      refetchOnWindowFocus: false,
    }
  )

  const { data: monthlyData, isLoading: monthlyLoading } = useQuery(
    'monthlyAnalytics',
    () => analyticsService.getMonthlyData(),
    {
      refetchOnWindowFocus: false,
    }
  )

  return {
    weeklyData,
    monthlyData,
    loading: weeklyLoading || monthlyLoading,
  }
}