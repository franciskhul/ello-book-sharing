// @mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import type { Breakpoint } from '@mui/system';

// ----------------------------------------------------------------------

export default function useResponsive(query: string, key: Breakpoint, start: number, end: number) {
    const theme = useTheme();

    const mediaUp = useMediaQuery(theme.breakpoints.up(key));

    const mediaDown = useMediaQuery(theme.breakpoints.down(key));

    const mediaBetween = useMediaQuery(theme.breakpoints.between(start, end));

    const mediaOnly = useMediaQuery(theme.breakpoints.only(key));

    if (query === 'up') {
        return mediaUp;
    }

    if (query === 'down') {
        return mediaDown;
    }

    if (query === 'between') {
        return mediaBetween;
    }

    if (query === 'only') {
        return mediaOnly;
    }
    return null;
}